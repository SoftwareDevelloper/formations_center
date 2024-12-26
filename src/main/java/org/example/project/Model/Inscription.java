package org.example.project.Model;

import jakarta.persistence.*;

import java.util.Calendar;
import java.util.Date;

@Entity
public class Inscription {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date dateEntree;
    private Date dateSortie;
    private String Status;
    @ManyToOne
    @JoinColumn(name = "idApp")
    private Apprenant Apprenant;
    @ManyToOne
    @JoinColumn(name = "idForms")
    private Formations Formations;

    public Inscription() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDateEntree() {
        return dateEntree;
    }

    public void setDateEntree(Date dateEntree) {
        this.dateEntree = dateEntree;
    }

    public Date getDateSortie() {
        return dateSortie;
    }

    public void setDateSortie(Date dateSortie) {
        this.dateSortie = dateSortie;
    }
    public String getStatus() {
        return Status;
    }
    public void setStatus(String status) {
        Status = status;
    }

    public Apprenant getApprenant() {
        return Apprenant;
    }

    public void setApprenant(Apprenant apprenant) {
        Apprenant = apprenant;
    }

    public Formations getFormations() {
        return Formations;
    }

    public void setFormations(Formations formations) {
        Formations = formations;
    }
}
