package org.example.project.controlleur;

import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.example.project.DTO.ApprenantDTO;
import org.example.project.Model.Apprenant;
import org.example.project.Model.Formations;
import org.example.project.Repository.ApprenantREPO;
import org.example.project.servicImpl.ApprenantServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static org.hibernate.query.sqm.tree.SqmNode.log;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"},
        methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST})
@RestController
@RequestMapping("/Apprenant")
public class ApprenantControlleur {
    @Autowired
    ApprenantServiceImpl apprenantServImpl;
    @Autowired
    private ApprenantREPO apprenantREPO;

    @GetMapping("/GetAllApprenant")
    public List<Apprenant> getAllApprenant() {
        return apprenantServImpl.getAllApprenants();
    }
    @GetMapping("/GetApprenantByid/{id}")
    public Apprenant getApprenantById(@PathVariable Long id) {
        return apprenantServImpl.getApprenantById(id);
    }
    @PostMapping("/AddApprenant")
    public ResponseEntity<String> addApprenant(@RequestBody Apprenant apprenant) {
        apprenantServImpl.AddApprenant(apprenant);
        return ResponseEntity.ok("Apprenant added successfully");
    }
    @PutMapping("UpdateApprenant/{id}")
    public ResponseEntity<Apprenant> updateApprenant(@RequestBody Apprenant apprenant, @PathVariable Long id) {
        Apprenant ExistingApprenant = apprenantServImpl.getApprenantById(id);
        if (ExistingApprenant != null) {
            ExistingApprenant.setNom(apprenant.getNom());
            ExistingApprenant.setPrenom(apprenant.getPrenom());
            ExistingApprenant.setEmail(apprenant.getEmail());
            ExistingApprenant.setPassword(apprenant.getPassword());
            ExistingApprenant.setAdresse(apprenant.getAdresse());
            ExistingApprenant.setTelephone(apprenant.getTelephone());
            ExistingApprenant.setNiveau(apprenant.getNiveau());
            ExistingApprenant.setPassword(apprenant.getPassword());
            //ExistingApprenant.setInscription(apprenant.getInscription());
            ExistingApprenant=apprenantServImpl.UpdateApprenant(ExistingApprenant);
            return ResponseEntity.ok(ExistingApprenant);
        }else {
            return ResponseEntity.notFound().build();
        }

    }
    @DeleteMapping("DeleteApprenant/{id}")
    public ResponseEntity<Apprenant> deleteApprenant(@PathVariable Long id) {
        Apprenant apprenant = apprenantServImpl.getApprenantById(id);
        if (apprenant != null) {
            apprenantServImpl.DeleteApprenant(id);
            return ResponseEntity.ok(apprenant);
        }else{
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@Valid @RequestBody Apprenant apprenant) {
        try {
            if (apprenantServImpl.existsByEmail(apprenant.getEmail())) {
                return ResponseEntity.badRequest().body("Email already in use");
            }

            if (!apprenant.getPassword().equals(apprenant.getConfirmPassword())) {
                return ResponseEntity.badRequest().body("Passwords do not match");
            }
            apprenant.setPassword(apprenant.getPassword());
            apprenantServImpl.AddApprenant(apprenant);

            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            log.error("Registration failed", e);
            return ResponseEntity.status(500).body("Server error: " + e.getMessage());
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Apprenant apprenant) {
        Apprenant existingApprenant = apprenantServImpl.getApprenantByEmail(apprenant.getEmail());
        if (existingApprenant == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid email or password"));
        }
        if (!existingApprenant.getPassword().equals(apprenant.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid email or password"));
        }
        String token = Jwts.builder()
                .setSubject(apprenant.getEmail())
                .claim("id", existingApprenant.getId())
                .compact();

        return ResponseEntity.ok(Map.of("message", "Login successful", "token", token));
    }
    @GetMapping("/formations/{id}")
    public Set<Formations> getFormationsByApprenantId(@PathVariable Long id) {
        Apprenant apprenant = apprenantREPO.findById(id)
                .orElseThrow(() -> new RuntimeException("Apprenant not found"));
        return apprenant.getFormations();
    }
    @GetMapping("/GetAllApprenantDTO")
    public ResponseEntity<List<ApprenantDTO>> getAllProductDTO() {
        List<ApprenantDTO> apprenantDTO = apprenantServImpl.getAllApprenantDTO();
        return new ResponseEntity(apprenantDTO, HttpStatus.OK);
    }









}
