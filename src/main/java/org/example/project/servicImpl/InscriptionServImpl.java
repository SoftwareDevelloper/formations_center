package org.example.project.servicImpl;

import org.example.project.Model.Inscription;
import org.example.project.Repository.InscriptionRepo;
import org.example.project.service.InscriptionServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class InscriptionServImpl implements InscriptionServ {
    @Autowired
    InscriptionRepo repo;

    @Override
    public Inscription InscrireTo(Inscription inscription) {
        return repo.save(inscription);
    }

    @Override
    public List<Inscription> GetAllInscriptions() {
        return repo.findAll();
    }

    @Override
    public Inscription GetInscriptionById(Long id) {
        return repo.findById(id).get();
    }
}
