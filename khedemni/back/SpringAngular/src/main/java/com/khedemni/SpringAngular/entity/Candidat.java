package com.khedemni.SpringAngular.entity;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name="Candidat")
public class Candidat {

  @Id
  @Column(name = "Candidat_id", length = 50)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(name = "Candidat_firstname", length = 50)
  private String firstname;

  @Column(name = "Candidat_lastname", length = 60)
  private String lastname;

  @Column(name = "Candidat_email", length = 15)
  private String email;

  @Column(name = "Candidat_phone", length = 15)
  private String phone;

  @Column(name = "Candidat_password", length = 15)
  private String password;

  @Column(name = "Candidat_role", length = 20)
  private String role = "candidat";

  @Column(name = "Candidat_skills", length = 255)
  private String skills;

  @OneToMany
  private List<Candidature> candidatures;

  public Candidat(int id, String firstname, String lastname, String email, String phone, String password, String role, String skills, List<Candidature> candidatures) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.role = role;
    this.skills = skills;
    this.candidatures = candidatures;
  }

  public Candidat() {
  }

  public Candidat(String firstname, String lastname, String email, String phone, String password, String role, String skills, List<Candidature> candidatures) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.role = role;
    this.skills = skills;
    this.candidatures = candidatures;
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
    return "Candidat{" +
      "id=" + id +
      ", firstname='" + firstname + '\'' +
      ", lastname='" + lastname + '\'' +
      ", email='" + email + '\'' +
      ", phone='" + phone + '\'' +
      ", password='" + password + '\'' +
      ", role='" + role + '\'' +
      ", skills='" + skills + '\'' +
      ", candidatures=" + candidatures +
      '}';
  }
}
