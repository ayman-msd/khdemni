package com.khedemni.SpringAngular.service;
import com.khedemni.SpringAngular.DTO.CandidatDTO;
import com.khedemni.SpringAngular.DTO.CandidatSaveDTO;
import com.khedemni.SpringAngular.DTO.CandidatUpdateDTO;

import java.util.List;

public interface Candidatservice {
  String addCandidat(CandidatSaveDTO CandidatsaveDTO);

  List<CandidatDTO> getallCandidats();

  String updateCandidat(CandidatUpdateDTO CandidatupdateDTO);

  boolean deleteCandidat(int id);
}
