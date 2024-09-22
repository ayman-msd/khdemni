package com.khedemni.SpringAngular.DTO;


import com.khedemni.SpringAngular.entity.Candidat;
import com.khedemni.SpringAngular.entity.Offre;
import jakarta.persistence.OneToOne;

public class CandidatureUpdateDTO {

  private int id;
  @OneToOne
  private Candidat can;
  @OneToOne
  private Offre offre;
  private int compatibility;

  public CandidatureUpdateDTO(int id, Candidat can, Offre offre, int compatibility) {
    this.id = id;
    this.can = can;
    this.offre = offre;
    this.compatibility = compatibility;
  }

  public CandidatureUpdateDTO() {
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
    return "CandidatureDTO{" +
      "id=" + id +
      ", can=" + can +
      ", offre=" + offre +
      ", compatibility=" + compatibility +
      '}';
  }
}
