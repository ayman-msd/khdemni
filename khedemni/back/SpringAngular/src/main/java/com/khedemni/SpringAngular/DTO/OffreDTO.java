package com.khedemni.SpringAngular.DTO;

import com.khedemni.SpringAngular.entity.Candidature;

import java.util.List;

public class OffreDTO {

  private int id;
  private String title;
  private String desc;
  private String skills;
  private List<Candidature> candidatures; // New field

  public OffreDTO(int id, String title, String desc, String skills, List<Candidature> candidatures) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.skills = skills;
    this.candidatures = candidatures; // Initialize new field
  }

  public OffreDTO() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDesc() {
    return desc;
  }

  public void setDesc(String desc) {
    this.desc = desc;
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
    return "OffreDTO{" +
      "id=" + id +
      ", title='" + title + '\'' +
      ", desc='" + desc + '\'' +
      ", skills='" + skills + '\'' +
      ", candidatures=" + candidatures + // Include new field in toString()
      '}';
  }
}
