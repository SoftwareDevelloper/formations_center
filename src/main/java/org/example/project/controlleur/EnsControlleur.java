package org.example.project.controlleur;

import jakarta.servlet.http.HttpServletRequest;
import org.example.project.Model.Enseignant;
import org.example.project.servicImpl.EnsServiceIMPL;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/Enseignant")
public class EnsControlleur {
    @Autowired
    EnsServiceIMPL ensServIMPL;
    //private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @GetMapping("/FindAllENS")
    public List<Enseignant> findAllENS() {
        return ensServIMPL.findAllEnseignants();
    }
    @PostMapping("/AddEns")
    public Enseignant addEns(@RequestBody Enseignant ens) {
        return ensServIMPL.saveEnseignant(ens);
    }
    @GetMapping("/GetEns/{id}")
    public Enseignant getEns(@PathVariable Long id) {
        return ensServIMPL.findEnseignantById(id);
    }
    @PutMapping("UpdateEns/{id}")
    public ResponseEntity<Enseignant> updateEns(@RequestBody Enseignant ens , @PathVariable Long id) {
        Enseignant ExistingEns = ensServIMPL.findEnseignantById(id);
        if (ExistingEns != null){
            ExistingEns.setNom(ens.getNom());
            ExistingEns.setPrenom(ens.getPrenom());
            ExistingEns.setEmail(ens.getEmail());
            ExistingEns.setAdresse(ens.getAdresse());
            ExistingEns.setTelephone(ens.getTelephone());
            ExistingEns.setSalary(ens.getSalary());
            ExistingEns.setSubjectSpecialized(ens.getSubjectSpecialized());
            ExistingEns.setPassword(ens.getPassword());
            ExistingEns = ensServIMPL.saveEnseignant(ExistingEns);
            return ResponseEntity.ok(ExistingEns);

        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("DeleteEns/{id}")
    public ResponseEntity<Enseignant> deleteEns(@PathVariable Long id) {
        Enseignant ExistingEns = ensServIMPL.findEnseignantById(id);
        if (ExistingEns != null){
            ensServIMPL.deleteEnseignantById(id);
            return ResponseEntity.ok(ExistingEns);
        }else {
            return ResponseEntity.notFound().build();
        }

    }


}

