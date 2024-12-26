package org.example.project.servicImpl;

import jakarta.transaction.Transactional;
import org.example.project.Model.Enseignant;
import org.example.project.Repository.EnseignantRepo;
import org.example.project.service.EnsSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Transactional
public class EnsServiceIMPL implements EnsSerivce {
    @Autowired
    EnseignantRepo enseignantRepo;

    @Override
    public List<Enseignant> findAllEnseignants() {
        return enseignantRepo.findAll();
    }

    @Override
    public Enseignant saveEnseignant(Enseignant enseignant) {
        return  enseignantRepo.save(enseignant);
    }

    @Override
    public Enseignant updateEnseignant(Long id ,Enseignant enseignant) {
        return enseignantRepo.save(enseignant);
    }

    @Override
    public void deleteEnseignantById(Long id) {
        enseignantRepo.deleteById(id);
    }
    public Enseignant findEnseignantById(Long id){
        return enseignantRepo.findById(id).get();
    }
}
