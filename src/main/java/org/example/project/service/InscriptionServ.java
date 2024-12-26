package org.example.project.service;

import org.example.project.Model.Inscription;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface InscriptionServ {
    public Inscription InscrireTo(Inscription inscription);
    public List<Inscription> GetAllInscriptions();
    public Inscription GetInscriptionById(Long id);
}
