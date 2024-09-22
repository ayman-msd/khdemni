import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import spacy
from pdfminer.high_level import extract_text
from pyresparser import ResumeParser
from spacy.matcher import Matcher

# Create a temporary directory within the project directory
temp_dir = 'temp_uploads'
if not os.path.exists(temp_dir):
    os.makedirs(temp_dir)

# Define the temporary file path within the temporary directory
temp_file_path = os.path.join(temp_dir, 'uploaded_resume.pdf')

# Define the directory to store PDF files
cv_directory = "C:\\Users\\Ayman\\Desktop\\emsi\\app\\CV"

# Load spaCy model
nlp = spacy.load('en_core_web_lg')

# Function to extract skills from text
def extract_skills(text):
    # Process the text using spaCy
    doc = nlp(text)
    
    # Define patterns for frameworks
    framework_patterns = [
        [{"LOWER": "angular"}],
        [{"LOWER": "react"}],
        # Add more framework patterns as needed
    ]

    # Add framework patterns to spaCy Matcher
    matcher = Matcher(nlp.vocab)
    for pattern in framework_patterns:
        matcher.add("framework", None, pattern)

    # Apply the matcher to the document
    matches = matcher(doc)
    
    # Extract skills using spaCy's named entity recognition (NER)
    skills = [ent.text.lower() for ent in doc.ents if ent.label_ == 'SKILL']
    skills += [doc[start:end].text.lower() for _, start, end in matches]

    return list(set(skills))

# Function to read PDF file and extract text
def read_pdf(file_path):
    text = extract_text(file_path)
    return text

# Function to extract skills from resume
def extract_skills_from_resume(file):
    # Get secure version of the original filename
    filename = secure_filename(file.filename)
    
    # Save the uploaded resume file to the CV directory with original filename
    cv_file_path = os.path.join(cv_directory, filename)
    file.save(cv_file_path)
    
    # Read the PDF file
    resume_text = read_pdf(cv_file_path)
    
    # Use pyresparser to get additional skills
    resume = ResumeParser(cv_file_path)
    resume_data = resume.get_extracted_data()
    additional_skills = resume_data.get('skills', [])
    
    # Extract skills using spaCy
    spaCy_skills = extract_skills(resume_text)
    
    # Combine and return all extracted skills
    all_skills = list(set([skill.lower() for skill in additional_skills + spaCy_skills]))
    all_skills = [skill for skill in all_skills if skill.lower() not in ['english', 'french', 'spanish', 'german', 'italian','ibm']]
    
    return all_skills

# Create Flask app
app = Flask(__name__)
CORS(app)

# Endpoint to extract skills from resume
@app.route('/extract-skills', methods=['POST'])
def extract_skills_endpoint():
    if 'resume' not in request.files:
        return jsonify({'error': 'No resume file provided'}), 400

    resume_file = request.files['resume']

    extracted_skills = extract_skills_from_resume(resume_file)
    
    if extracted_skills:
        return jsonify({'skills': extracted_skills}), 200
    else:
        return jsonify({'message': 'No skills extracted from the resume'}), 404

if __name__ == '__main__':
    app.run(debug=True)
