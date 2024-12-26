package org.example.project.servicImpl;

import jakarta.transaction.Transactional;
import org.example.project.DTO.ApprenantDTO;
import org.example.project.Model.Apprenant;
import org.example.project.Repository.ApprenantREPO;
import org.example.project.service.ApprenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ApprenantServiceImpl implements ApprenantService {
    @Autowired
    ApprenantREPO repo;
    @Autowired
    private ApprenantREPO apprenantREPO;

    @Override
    public List<Apprenant> getAllApprenants() {
        return repo.findAll();
    }

    @Override
    public Apprenant AddApprenant(Apprenant apprenant) {
        return repo.save(apprenant);
    }

    @Override
    public Apprenant UpdateApprenant(Apprenant apprenant) {
        return repo.save(apprenant);
    }

    @Override
    public void DeleteApprenant(Long id) {
         repo.deleteById(id);
    }
    @Override
    public Apprenant getApprenantById(Long id) {
        return repo.findById(id).get();
    }

    @Override
    public boolean existsByEmail(String email) {
        return repo. existsByEmail(email);
    }

    @Override
    public Apprenant getApprenantByEmail(String email) {
        return repo.getByEmail(email);
    }

    @Override
    public List<ApprenantDTO> getAllApprenantDTO() {
        List<Apprenant> apprenants =apprenantREPO.findAll();
        return apprenants.stream()
                .map(Apprenant-> new ApprenantDTO(Apprenant.getId(),Apprenant.getNom(),Apprenant.getPrenom(),Apprenant.getNiveau()
                ))
                .collect(Collectors.toList());

    }

    @Override
    public void DeleteApprenantDTO(Long id) {
        Apprenant apprenants = apprenantREPO.findById(id).get();
        apprenantREPO.delete(apprenants);

    }


    @Override
    public Apprenant GetApprenantDTOById(Long id) {
        return apprenantREPO.findById(id).get();
    }
}
