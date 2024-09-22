package com.khedemni.SpringAngular.candidature;

import com.khedemni.SpringAngular.DTO.CandidatureDTO;
import com.khedemni.SpringAngular.DTO.CandidatureSaveDTO;
import com.khedemni.SpringAngular.DTO.CandidatureUpdateDTO;
import com.khedemni.SpringAngular.service.Candidatureservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/candidature")
public class CandidatureController {


  @Autowired
  private Candidatureservice Candidatureservice;

  @PostMapping(path ="/save")
  public int savecandidature(@RequestBody CandidatureSaveDTO candidaturesaveDTO) {
    int id = Candidatureservice.addCandidature(candidaturesaveDTO);
    return id;
  }

  @GetMapping(path ="/getallcandidatures")
  public List<CandidatureDTO> getallcandidatures(){
    List<CandidatureDTO>allcandidatures=Candidatureservice.getallCandidatures();
    return allcandidatures;
  }

  @PostMapping(path ="/update")
  public String updatecandidature(@RequestBody CandidatureUpdateDTO candidatureupdateDTO) {
    String id = Candidatureservice.updateCandidature(candidatureupdateDTO);
    return id;
  }

  @DeleteMapping(path ="/deletecandidat/{id}")
  public String deletecandidature(@PathVariable(value="id") int id) {
    boolean deletecandidature = Candidatureservice.deleteCandidature(id);
    return "deleted";
  }
}
