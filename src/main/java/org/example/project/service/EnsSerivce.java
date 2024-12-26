package org.example.project.service;

import jakarta.transaction.Transactional;
import org.example.project.Model.Enseignant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public interface EnsSerivce {
    public List<Enseignant> findAllEnseignants();
    public Enseignant findEnseignantById(Long id);
    public Enseignant saveEnseignant(Enseignant enseignant);
    public Enseignant updateEnseignant(Long id,Enseignant enseignant);
    public void deleteEnseignantById(Long id);

}
