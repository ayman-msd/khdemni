package com.khedemni.SpringAngular.service;

import com.khedemni.SpringAngular.DTO.CandidatureDTO;
import com.khedemni.SpringAngular.DTO.CandidatureSaveDTO;
import com.khedemni.SpringAngular.DTO.CandidatureUpdateDTO;

import java.util.List;

public interface Candidatureservice {

  int addCandidature(CandidatureSaveDTO CandidaturesaveDTO);

  List<CandidatureDTO> getallCandidatures();

  String updateCandidature(CandidatureUpdateDTO CandidatureupdateDTO);

  boolean deleteCandidature(int id);
}
