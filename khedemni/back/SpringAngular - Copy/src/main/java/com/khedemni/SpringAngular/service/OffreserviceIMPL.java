package com.khedemni.SpringAngular.service;

import com.khedemni.SpringAngular.Offrerepo.Offrerepo;
import com.khedemni.SpringAngular.DTO.OffreDTO;
import com.khedemni.SpringAngular.DTO.OffreSaveDTO;
import com.khedemni.SpringAngular.DTO.OffreUpdateDTO;
import com.khedemni.SpringAngular.entity.Offre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OffreserviceIMPL implements Offreservice{

  @Autowired
  private Offrerepo Offrerepo;
  @Override
  public String addOffre(OffreSaveDTO OffreSaveDTO) {
    Offre o = new Offre(
      OffreSaveDTO.getId(),
      OffreSaveDTO.getTitle(),
      OffreSaveDTO.getDesc(),
      OffreSaveDTO.getSkills(),
      OffreSaveDTO.getCandidatures()
    );
    Offrerepo.save(o);
    return o.getTitle();

  }

  @Override
  public List<OffreDTO> getallOffres() {
    List<Offre> getOffres = Offrerepo.findAll();
    List<OffreDTO> OffreDTOList = new ArrayList<>();
    for(Offre i:getOffres){
      OffreDTO OffreDTO = new OffreDTO(
        i.getId(),
        i.getTitle(),
        i.getDesc(),
        i.getSkills(),
        i.getCandidatures()
      );
      OffreDTOList.add(OffreDTO);
    }
    return OffreDTOList;
  }



  @Override
  public String updateOffre(OffreUpdateDTO OffreupdateDTO) {
    if (Offrerepo.existsById(OffreupdateDTO.getId())){
      Offre o = Offrerepo.getById(OffreupdateDTO.getId());
      o.setTitle(OffreupdateDTO.getTitle());
      o.setDesc(OffreupdateDTO.getDesc());
      o.setSkills(OffreupdateDTO.getSkills());
      o.setCandidatures(OffreupdateDTO.getCandidatures());
      Offrerepo.save(o);
    }

    else{
      System.out.println("Offre don't exist");
    }

    return null;
  }

  @Override
  public boolean deleteOffre(int id) {

    if (Offrerepo.existsById(id)){
      Offrerepo.deleteById(id);
    }

    else System.out.println("no matching id found");

    return true;
  }
}
