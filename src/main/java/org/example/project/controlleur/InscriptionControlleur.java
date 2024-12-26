package org.example.project.controlleur;

import org.example.project.Model.Inscription;
import org.example.project.servicImpl.InscriptionServImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping("/Inscrire")
@RestController
public class InscriptionControlleur {
    @Autowired
    InscriptionServImpl inscriptionServ;
    @PostMapping("/Inscription")
    public ResponseEntity<Inscription> inscrire(@RequestBody Inscription inscription) {
        Inscription savedInscription = inscriptionServ.InscrireTo(inscription);
        return ResponseEntity.ok(savedInscription);
    }
    @GetMapping("/inscription/{id}")
    public Inscription getInscription(@PathVariable Long id) {
        return inscriptionServ.GetInscriptionById(id);
    }
    @GetMapping("/inscription/all")
    public List<Inscription> getAllInscription() {
        return inscriptionServ.GetAllInscriptions();
    }
}
