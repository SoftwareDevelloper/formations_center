package org.example.project.controlleur;

import io.jsonwebtoken.Jwts;
import jakarta.validation.Valid;
import org.example.project.DTO.ApprenantDTO;
import org.example.project.DTO.InternoteDtO;
import org.example.project.Model.Internote;
import org.example.project.servicImpl.InternoteServImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200", methods = {RequestMethod.OPTIONS, RequestMethod.GET, RequestMethod.POST})
@RequestMapping("/Internote")
public class InternoteControlleur {
    @Autowired
    InternoteServImpl internoteServImpl;

    @PostMapping("/AddInternote")
    public Internote addInternote(@RequestBody Internote internote ) {

       return internoteServImpl.AddInternote(internote);
        }
    @PutMapping("/UpdateInternote/{id}")
    public ResponseEntity<Internote> updateInternote(@RequestBody Internote internote, @PathVariable Long id) {
        Internote ExistingInternote = internoteServImpl.findInternoteById(id);
        if (ExistingInternote != null) {
            ExistingInternote.setLogin(internote.getLogin());
            ExistingInternote.setPassword(internote.getPassword());
            ExistingInternote.setRole(internote.getRole());
            ExistingInternote = internoteServImpl.UpdateInternote(ExistingInternote);

            return ResponseEntity.ok(ExistingInternote);
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/DeleteInternote/{id}")
    public ResponseEntity<?> deleteInternote(@PathVariable Long id) {
        Internote existingInternote = internoteServImpl.findInternoteById(id);
        if (existingInternote != null) {
            internoteServImpl.DeleteInternote(id);
            return ResponseEntity.ok("Internote deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Internote not found");
        }
    }
    @GetMapping("/GetAllInternote")
    public List<Internote> getAllInternote() {
        return internoteServImpl.findAllInternote();
    }
    @GetMapping("/GetInternoteById/{id}")
    public Internote getInternoteById(@PathVariable Long id) {
        return internoteServImpl.findInternoteById(id);
    }




    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Internote internote) {
        Internote existingInternote = internoteServImpl.findLogin(internote.getLogin());
        if (existingInternote == null ||
                !existingInternote.getPassword().equals(internote.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid email or password"));
        }

        String token = Jwts.builder()
                .setSubject(internote.getLogin())
                .claim("id", existingInternote.getId())
                .claim("role", existingInternote.getRole())
                .compact();

        return ResponseEntity.ok(Map.of("message", "Bienvenue"+" "+existingInternote.getRole(), "role", existingInternote.getRole(),"token", token));

    }
    @GetMapping("/GetAllInternoteDTO")
    public ResponseEntity<List<InternoteDtO>> getAllProductDTO() {
        List<InternoteDtO> internoteDtO = internoteServImpl.GETAllInternote();
        return new ResponseEntity(internoteDtO, HttpStatus.OK);
    }







}
