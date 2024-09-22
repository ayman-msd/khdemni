import spacy
from pdfminer.high_level import extract_text
from pyresparser import ResumeParser
from spacy.matcher import Matcher
from flask import Flask, request, jsonify
from flask_cors import CORS

# Download spaCy model if not already downloaded
# Uncomment the line below if you haven't downloaded the model yet
# spacy.cli.download("en_core_web_sm")

# Load spaCy model
nlp = spacy.load('en_core_web_lg')
def extract_skills(text):
    # Process the text using spaCy
    doc = nlp(text)
    
    #adding frameworks to the model
    # Define patterns for frameworks like Angular and React
    framework_patterns = [
        [{"LOWER": "angular"}],
        [{"LOWER": "react"}],
        [{"LOWER": "django"}],
        [{"LOWER": "Nodejs"}],
        [{"LOWER": "spring"}],
        [{"LOWER": "springboot"}],
        [{"LOWER": "spring boot"}],
        [{"LOWER": "Angular.js"}],
        [{"LOWER": "React.js"}],
        [{"LOWER": "Vue.js"}],
        [{"LOWER": "Django (Python)"}],
        [{"LOWER": "Ruby on Rails (Ruby)"}],
        [{"LOWER": "Express.js (Node.js)"}],
        [{"LOWER": "Flask (Python)"}],
        [{"LOWER": "Laravel (PHP)"}],
        [{"LOWER": "Symfony (PHP)"}],
        [{"LOWER": "ASP.NET (C#)"}],
        [{"LOWER": "Meteor.js"}],
        [{"LOWER": "Ember.js"}],
        [{"LOWER": "CakePHP (PHP)"}],
        [{"LOWER": "CodeIgniter (PHP)"}],
        [{"LOWER": "Rails (Ruby)"}],
        [{"LOWER": "Vue.js"}],
        [{"LOWER": "Bootstrap"}],
        [{"LOWER": "Foundation"}],
        [{"LOWER": "Materialize CSS"}],
        [{"LOWER": "Tailwind CSS"}],
        [{"LOWER": "jQuery"}],
        [{"LOWER": "ASP.NET MVC (C#)"}],
        [{"LOWER": "Sails.js (Node.js)"}],
        [{"LOWER": "Express.js (Node.js)"}],
        [{"LOWER": "Next.js (React)"}],
        [{"LOWER": "Nuxt.js (Vue.js)"}],
        [{"LOWER": "Struts (Java)"}],
        [{"LOWER": "Grails (Groovy)"}],
        [{"LOWER": "Phoenix (Elixir)"}],
        [{"LOWER": "Flask-RESTful (Python)"}],
        [{"LOWER": "FastAPI (Python)"}],
        [{"LOWER": "Sinatra (Ruby)"}],
        [{"LOWER": "Padrino (Ruby)"}],
        [{"LOWER": "Spring Boot (Java)"}],
        [{"LOWER": "Hibernate (Java)"}],
        [{"LOWER": "Zend Framework (PHP)"}],
        [{"LOWER": "Yii (PHP)"}],
        [{"LOWER": "Phalcon (PHP)"}],
        [{"LOWER": "FuelPHP (PHP)"}],
        [{"LOWER": "Play Framework (Java/Scala)"}],
        [{"LOWER": "Cordova (Mobile App Development)"}],
        [{"LOWER": "Ionic (Mobile App Development)"}],
        [{"LOWER": "React Native (Mobile App Development)"}],
        [{"LOWER": "Flutter (Mobile App Development)"}],
        [{"LOWER": "PhoneGap (Mobile App Development)"}],
        [{"LOWER": "NativeScript (Mobile App Development)"}],
        [{"LOWER": "Xamarin (Mobile App Development)"}],
        [{"LOWER": "Aurelia.js"}],
        [{"LOWER": "typescript"}],
        [{"LOWER": "jee"}],
        [{"LOWER": "j2ee"}],
        [{"LOWER": "mongodb"}],
        [{"LOWER": "devops"}],
        [{"LOWER": "agile"}],
        [{"LOWER": "git"}],
        [{"LOWER": "uml"}],
        [{"LOWER": "merise"}],
        # Add more patterns for other frameworks if needed
    ]

    # Add framework patterns to spaCy Matcher
    matcher = Matcher(nlp.vocab)
    for pattern in framework_patterns:
        matcher.add("framework", None, pattern)

    # Apply the matcher to the document
    matches = matcher(doc)
    
    # Extract skills using spaCy's named entity recognition (NER)
    frames = [doc[start:end].text for _, start, end in matches]
    frames = list(set(skill.lower() for skill in frames))
    
    # Extract skills using spaCy's named entity recognition (NER)
    skills = [ent.text.lower() for ent in doc.ents if ent.label_ == 'SKILL']
    skills = skills+frames
    
    return skills
def read_pdf(file_path):
    # Extract text from PDF using pdfminer
    text = extract_text(file_path)
    return text

def extract_skills_from_resume(file_path):
    # Read the PDF file
    resume_text = read_pdf(file_path)
    # Use pyresparser to get additional skills
    resume=ResumeParser(file_path)
    resume_data = resume.get_extracted_data()
    additional_skills = resume_data.get('skills', [])
    # Extract skills using spaCy
    spaCy_skills = extract_skills(resume_text)
    # Combine and return all extracted skills
    all_skills = list(set([skill.lower() for skill in additional_skills + spaCy_skills]))
    #removing languages from skills
    all_skills = [skill for skill in all_skills if skill.lower() not in ['english', 'french', 'spanish', 'german', 'italien']]
    #return jsonify ({'all_skills',all_skills})
    return all_skills

# Replace 'your_resume.pdf' with the actual file path to your PDF resume
pdf_file_path = r'C:\Users\Ayman\Desktop\parser\test\55.pdf'

extracted_skills = extract_skills_from_resume(pdf_file_path)
if extracted_skills:
    print("Skills extracted from the resume:")
    for skill in extracted_skills:
        print(skill)
else:
    print("No skills extracted from the resume.")
   

app = Flask(__name__) 
CORS(app)
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
    app.run(port=5000)

