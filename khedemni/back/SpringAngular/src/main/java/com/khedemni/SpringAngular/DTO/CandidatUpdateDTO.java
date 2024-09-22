package com.khedemni.SpringAngular.DTO;

import com.khedemni.SpringAngular.entity.Candidature;

import java.util.List;

public class CandidatUpdateDTO {

  private int id;
  private String firstname;
  private String lastname;
  private String email;
  private String phone; // New field
  private String password;
  private String role = "candidat";
  private String skills;
  private List<Candidature> candidatures;

  public CandidatUpdateDTO(int id, String firstname, String lastname, String email, String phone, String password, String role, String skills, List<Candidature> candidatures) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone; // Initialize new field
    this.password = password;
    this.role = role;
    this.skills = skills;
    this.candidatures = candidatures;
  }

  public CandidatUpdateDTO() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getFirstname() {
    return firstname;
  }

  public void setFirstname(String firstname) {
    this.firstname = firstname;
  }

  public String getLastname() {
    return lastname;
  }

  public void setLastname(String lastname) {
    this.lastname = lastname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public String getSkills() {
    return skills;
  }

  public void setSkills(String skills) {
    this.skills = skills;
  }

  public List<Candidature> getCandidatures() {
    return candidatures;
  }

  public void setCandidatures(List<Candidature> candidatures) {
    this.candidatures = candidatures;
  }

  @Override
  public String toString() {
    return "CandidatDTO{" +
      "id=" + id +
      ", firstname='" + firstname + '\'' +
      ", lastname='" + lastname + '\'' +
      ", email='" + email + '\'' +
      ", phone='" + phone + '\'' + // Include new field in toString()
      ", password='" + password + '\'' +
      ", role='" + role + '\'' +
      ", skills='" + skills + '\'' +
      ", candidatures=" + candidatures +
      '}';
  }
}
