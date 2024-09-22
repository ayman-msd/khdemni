package com.khedemni.SpringAngular.candidat;

import com.khedemni.SpringAngular.DTO.CandidatDTO;
import com.khedemni.SpringAngular.DTO.CandidatSaveDTO;
import com.khedemni.SpringAngular.DTO.CandidatUpdateDTO;
import com.khedemni.SpringAngular.service.Candidatservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("api/v1/candidat")
public class CandidatController {

  @Autowired
  private Candidatservice Candidatservice;

  @PostMapping(path ="/save")
  public String savecandidat(@RequestBody CandidatSaveDTO candidatsaveDTO) {
    String id = Candidatservice.addCandidat(candidatsaveDTO);
    return id;
  }

  @GetMapping(path ="/getallcandidats")
  public List<CandidatDTO> getallcandidats(){
    List<CandidatDTO>allcandidats=Candidatservice.getallCandidats();
    return allcandidats;
  }

  @PostMapping(path ="/update")
  public String updatecandidat(@RequestBody CandidatUpdateDTO candidatupdateDTO) {
    String id = Candidatservice.updateCandidat(candidatupdateDTO);
    return id;
  }

  @DeleteMapping(path ="/deletecandidat/{id}")
  public String deletecandidat(@PathVariable(value="id") int id) {
    boolean deletecandidat = Candidatservice.deleteCandidat(id);
    return "deleted";
  }


}

