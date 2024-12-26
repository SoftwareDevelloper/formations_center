package org.example.project.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Formations {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String description;
    private String typeFormation;
    private double prix;
    private Number duree;
    private String imageUrl;
    @ManyToMany(mappedBy = "formations")
    @JsonIgnore
    private Set<Apprenant> apprenants = new HashSet<>();
    public Formations() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTypeFormation() {
        return typeFormation;
    }

    public void setTypeFormation(String typeFormation) {
        this.typeFormation = typeFormation;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public Number getDuree() {
        return duree;
    }

    public void setDuree(Number duree) {
        this.duree = duree;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Set<Apprenant> getApprenants() {
        return apprenants;
    }

    public void setApprenants(Set<Apprenant> apprenants) {
        this.apprenants = apprenants;
    }
}
