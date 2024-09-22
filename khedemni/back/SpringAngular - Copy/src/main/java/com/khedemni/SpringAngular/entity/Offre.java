package com.khedemni.SpringAngular.entity;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="Offre")
public class Offre {

  @Id
  @Column(name = "Offre_id", length = 50)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;

  @Column(name = "Offre_title", length = 50)
  private String title;

  @Column(name = "Offre_desc", length = 100)
  private String desc;

  @Column(name = "Offre_skills", length = 100)
  private String skills;

  @OneToMany
  private List<Candidature> candidatures;

  public Offre(int id, String title, String desc, String skills, List<Candidature> candidatures) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.skills = skills;
    this.candidatures = candidatures;
  }

  public Offre() {
  }

  public Offre(String title, String desc, String skills, List<Candidature> candidatures) {
    this.title = title;
    this.desc = desc;
    this.skills = skills;
    this.candidatures = candidatures;
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
    return "Offre{" +
      "id=" + id +
      ", title='" + title + '\'' +
      ", desc='" + desc + '\'' +
      ", skills='" + skills + '\'' +
      '}';
  }
}
