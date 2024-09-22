package com.khedemni.SpringAngular.service;
import com.khedemni.SpringAngular.DTO.CandidatDTO;
import com.khedemni.SpringAngular.DTO.CandidatSaveDTO;
import com.khedemni.SpringAngular.DTO.CandidatUpdateDTO;
import com.khedemni.SpringAngular.entity.Candidat;
import com.khedemni.SpringAngular.Candidatrepo.Candidatrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CandidatserviceIMPL implements Candidatservice{

  @Autowired
  private Candidatrepo Candidatrepo;
  @Override
  public String addCandidat(CandidatSaveDTO CandidatSaveDTO) {
    Candidat c = new Candidat(
      CandidatSaveDTO.getFirstname(),
      CandidatSaveDTO.getLastname(),
      CandidatSaveDTO.getEmail(),
      CandidatSaveDTO.getPhone(),
      CandidatSaveDTO.getPassword(),
      CandidatSaveDTO.getRole(),
      CandidatSaveDTO.getSkills(),
      CandidatSaveDTO.getCandidatures()
    );
    Candidatrepo.save(c);
    return c.getFirstname();

  }

  @Override
  public List<CandidatDTO> getallCandidats() {
    List<Candidat> getCandidats = Candidatrepo.findAll();
    List<CandidatDTO> CandidatDTOList = new ArrayList<>();
    for(Candidat i:getCandidats){
      CandidatDTO CandidatDTO = new CandidatDTO(
        i.getId(),
        i.getFirstname(),
        i.getLastname(),
        i.getEmail(),
        i.getPhone(),
        i.getPassword(),
        i.getRole(),
        i.getSkills(),
        i.getCandidatures()
      );
      CandidatDTOList.add(CandidatDTO);
    }
    return CandidatDTOList;
  }



  @Override
  public String updateCandidat(CandidatUpdateDTO CandidatupdateDTO) {
    if (Candidatrepo.existsById(CandidatupdateDTO.getId())){
      Candidat c = Candidatrepo.getById(CandidatupdateDTO.getId());
      c.setFirstname(CandidatupdateDTO.getFirstname());
      c.setLastname(CandidatupdateDTO.getLastname());
      c.setEmail(CandidatupdateDTO.getEmail());
      c.setPhone(CandidatupdateDTO.getPhone());
      c.setPassword(CandidatupdateDTO.getPassword());
      c.setSkills(CandidatupdateDTO.getSkills());
      c.setCandidatures(CandidatupdateDTO.getCandidatures());
      Candidatrepo.save(c);
    }

    else{
      System.out.println("Candidat don't exist");
    }

    return null;
  }

  @Override
  public boolean deleteCandidat(int id) {

    if (Candidatrepo.existsById(id)){
      Candidatrepo.deleteById(id);
    }

    else System.out.println("no matching id found");

    return true;
  }
}
