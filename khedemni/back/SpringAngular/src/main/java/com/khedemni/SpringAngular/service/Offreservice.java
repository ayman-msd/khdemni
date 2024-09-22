package com.khedemni.SpringAngular.service;
import com.khedemni.SpringAngular.DTO.OffreDTO;
import com.khedemni.SpringAngular.DTO.OffreSaveDTO;
import com.khedemni.SpringAngular.DTO.OffreUpdateDTO;

import java.util.List;

public interface Offreservice {
  String addOffre(OffreSaveDTO OffresaveDTO);

  List<OffreDTO> getallOffres();

  String updateOffre(OffreUpdateDTO OffreupdateDTO);

  boolean deleteOffre(int id);
}
