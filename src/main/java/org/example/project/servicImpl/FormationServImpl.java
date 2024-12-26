package org.example.project.servicImpl;

import jakarta.transaction.Transactional;
import org.example.project.Model.Formations;
import org.example.project.Repository.FormationRepo;
import org.example.project.service.FormationServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class FormationServImpl implements FormationServ {
    @Autowired
    FormationRepo formationRepo;
    public List<Formations> getAllFormations(){
        return formationRepo.findAll();
    }
    public Formations getFormationById(Long id){
        return formationRepo.findById(id).get();
    }
    public Formations addFormation(Formations formation){
        return formationRepo.save(formation);
    }
    public Formations updateFormation(Formations formation){
        return formationRepo.save(formation);
    }
    public void deleteFormation(Long id){
        formationRepo.deleteById(id);
    }
    public Formations getFormationByName(String Title){
        return formationRepo.findByTitle(Title);
    }
}
