package com.khedemni.SpringAngular.entity;


import jakarta.persistence.*;

@Entity
@Table(name="Candidature")
public class Candidature {

  @Id
  @Column(name = "Candidature_id", length = 50)
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  @ManyToOne
  private Candidat can;
  @ManyToOne
  private Offre offre;
  @Column(name = "Candidature_compatibility", length = 50)
  private int compatibility;

  public Candidature(int id, Candidat can, Offre offre, int compatibility) {
    this.id = id;
    this.can = can;
    this.offre = offre;
    this.compatibility = compatibility;
  }

  public Candidature() {
  }

  public Candidature(Candidat can, Offre offre, int compatibility) {
    this.can = can;
    this.offre = offre;
    this.compatibility = compatibility;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public Candidat getCan() {
    return can;
  }

  public void setCan(Candidat can) {
    this.can = can;
  }

  public Offre getOffre() {
    return offre;
  }

  public void setOffre(Offre offre) {
    this.offre = offre;
  }

  public int getCompatibility() {
    return compatibility;
  }

  public void setCompatibility(int compatibility) {
    this.compatibility = compatibility;
  }

  @Override
  public String toString() {
    return "Candidature{" +
      "id=" + id +
      ", can=" + can +
      ", offre=" + offre +
      ", compatibility=" + compatibility +
      '}';
  }
}
