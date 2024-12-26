package org.example.project.service;

import jakarta.transaction.Transactional;
import org.example.project.Model.Formations;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public interface FormationServ {
    public List<Formations> getAllFormations();
    public Formations getFormationById(Long id);
    public Formations getFormationByName(String Title);
    public Formations addFormation(Formations formation);
    public Formations updateFormation(Formations formation);
    public void deleteFormation(Long id);

}
