package com.khedemni.SpringAngular.offre;

import com.khedemni.SpringAngular.DTO.OffreDTO;
import com.khedemni.SpringAngular.DTO.OffreSaveDTO;
import com.khedemni.SpringAngular.DTO.OffreUpdateDTO;
import com.khedemni.SpringAngular.service.Offreservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("api/v1/Offre")
public class OffreController {

  @Autowired
  private Offreservice Offreservice;

  @PostMapping(path ="/save")
  public String saveOffre(@RequestBody OffreSaveDTO OffresaveDTO) {
    String id = Offreservice.addOffre(OffresaveDTO);
    return id;
  }

  @GetMapping(path ="/getallOffres")
  public List<OffreDTO> getallOffres(){
    List<OffreDTO>allOffres=Offreservice.getallOffres();
    return allOffres;
  }

  @PostMapping(path ="/update")
  public String updateOffre(@RequestBody OffreUpdateDTO OffreupdateDTO) {
    String id = Offreservice.updateOffre(OffreupdateDTO);
    return id;
  }

  @DeleteMapping(path ="/deleteOffre/{id}")
  public String deleteOffre(@PathVariable(value="id") int id) {
    boolean deleteOffre = Offreservice.deleteOffre(id);
    return "deleted";
  }


}

