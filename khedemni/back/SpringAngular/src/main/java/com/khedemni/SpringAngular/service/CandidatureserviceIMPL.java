package com.khedemni.SpringAngular.service;

import com.khedemni.SpringAngular.Candidaturerepo.Candidaturerepo;
import com.khedemni.SpringAngular.DTO.CandidatureUpdateDTO;
import com.khedemni.SpringAngular.DTO.CandidatureDTO;
import com.khedemni.SpringAngular.DTO.CandidatureSaveDTO;
import com.khedemni.SpringAngular.entity.Candidature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CandidatureserviceIMPL implements Candidatureservice{

  @Autowired
  private Candidaturerepo Candidaturerepo;

  @Override
  public int addCandidature(CandidatureSaveDTO CandidatureSaveDTO) {
    Candidature c = new Candidature(
      CandidatureSaveDTO.getId(),
      CandidatureSaveDTO.getCan(),
      CandidatureSaveDTO.getOffre(),
      CandidatureSaveDTO.getCompatibility()
    );
    Candidaturerepo.save(c);
    return c.getId();

  }

  @Override
  public List<CandidatureDTO> getallCandidatures() {
    List<Candidature> getCandidatures = Candidaturerepo.findAll();
    List<CandidatureDTO> CandidatureDTOList = new ArrayList<>();
    for(Candidature i:getCandidatures){
      CandidatureDTO CandidatureDTO = new CandidatureDTO(
        i.getId(),
        i.getCan(),
        i.getOffre(),
        i.getCompatibility()
      );
      CandidatureDTOList.add(CandidatureDTO);
    }
    return CandidatureDTOList;
  }


  @Override
  public String updateCandidature(CandidatureUpdateDTO CandidatureupdateDTO) {
    if (Candidaturerepo.existsById(CandidatureupdateDTO.getId())){
      Candidature c = Candidaturerepo.getById(CandidatureupdateDTO.getId());
      c.setCan(CandidatureupdateDTO.getCan());
      c.setOffre(CandidatureupdateDTO.getOffre());
      c.setCompatibility(CandidatureupdateDTO.getCompatibility());
      Candidaturerepo.save(c);
    }

    else{
      System.out.println("Candidature don't exist");
    }

    return null;
  }


  @Override
  public boolean deleteCandidature(int id) {

    if (Candidaturerepo.existsById(id)){
      Candidaturerepo.deleteById(id);
    }

    else System.out.println("no matching id found");

    return true;
  }
}
