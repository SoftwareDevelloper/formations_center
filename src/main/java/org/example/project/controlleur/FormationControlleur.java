package org.example.project.controlleur;

import org.example.project.Model.Formations;
import org.example.project.servicImpl.FormationServImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Formations")
public class FormationControlleur {
    @Autowired
    FormationServImpl formationServ;
    @PostMapping("/AddFormations")
    public Formations AddFormations(@RequestBody Formations formations) {
        return formationServ.addFormation(formations);
    }
    @GetMapping("/ConsulterFormationsCatalogue")
    public List<Formations> ConsulterFormations() {
        return formationServ.getAllFormations();
    }
    @GetMapping("/ConsulterFormation/{id}")
    public Formations ConsulterFormation(@PathVariable Long id) {
        return formationServ.getFormationById(id);
    }


    @PutMapping("UpdateFormations/{id}")
    public ResponseEntity<Formations> UpdateFormations(@PathVariable Long id, @RequestBody Formations formations) {
        Formations existingFormations = formationServ.getFormationById(id);
        if (existingFormations != null) {
            existingFormations.setTitle(formations.getTitle());
            existingFormations.setDescription(formations.getDescription());
            existingFormations.setPrix(formations.getPrix());
            existingFormations.setTypeFormation(formations.getTypeFormation());
            existingFormations.setDuree(formations.getDuree());
            existingFormations.setImageUrl(formations.getImageUrl());
            Formations savedFormation = formationServ.updateFormation(existingFormations);
            return ResponseEntity.ok(savedFormation);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
    @DeleteMapping("/deleteFormations/{id}")
    public ResponseEntity<Formations> deleteFormation(@PathVariable Long id) {
        Formations formations = formationServ.getFormationById(id);
        if (formations != null) {
            formationServ.deleteFormation(id);
            return ResponseEntity.ok(formations);
        }
        return ResponseEntity.notFound().build();
    }



}
