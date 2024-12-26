package org.example.project.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
public class Apprenant  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull(message = "Name is required")
    private String nom;
    @NotNull(message = "surname is required")
    private String prenom;
    @NotNull(message = "Address is required")
    private String adresse;
    @NotNull(message = "Phone number is required")
    @Pattern(regexp = "\\d{8}", message = "Invalid phone number format")
    private String telephone;
    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    @NotNull(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
    @NotNull(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String confirmPassword;
    @NotNull(message = "Level is required")
    private String niveau;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "apprenant_formations",
            joinColumns = @JoinColumn(name = "apprenant_id"),
            inverseJoinColumns = @JoinColumn(name = "formation_id")
    )
    private Set<Formations> formations = new HashSet<>();



    public Apprenant() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public  String getNom() {
        return nom;
    }

    public void setNom( String nom) {
        this.nom = nom;
    }

    public  String getPrenom() {
        return prenom;
    }

    public void setPrenom( String prenom) {
        this.prenom = prenom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getConfirmPassword() {
        return confirmPassword;
    }
    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getNiveau() {
        return niveau;
    }

    public void setNiveau(String niveau) {
        this.niveau = niveau;
    }
    public Set<Formations> getFormations() {
        return formations;
    }

    public void setFormations(Set<Formations> formations) {
        this.formations = formations;
    }

}
