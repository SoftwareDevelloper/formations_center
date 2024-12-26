package org.example.project.service;

import jakarta.transaction.Transactional;
import org.example.project.DTO.ApprenantDTO;
import org.example.project.Model.Apprenant;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public interface ApprenantService {
    public List<Apprenant> getAllApprenants();
    public Apprenant getApprenantById(Long id);
    public Apprenant AddApprenant(Apprenant apprenant);
    public Apprenant UpdateApprenant(Apprenant apprenant);
    public void DeleteApprenant(Long id);

    boolean existsByEmail(String email);

    Apprenant getApprenantByEmail(String email);
    List<ApprenantDTO> getAllApprenantDTO();
    void DeleteApprenantDTO(Long id);
    Apprenant GetApprenantDTOById(Long id);
}
