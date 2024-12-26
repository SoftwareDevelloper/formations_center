package org.example.project.servicImpl;

import jakarta.transaction.Transactional;
import org.example.project.DTO.ApprenantDTO;
import org.example.project.DTO.InternoteDtO;
import org.example.project.Model.Apprenant;
import org.example.project.Model.Internote;
import org.example.project.Repository.InternoteRepo;
import org.example.project.service.internoteServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class InternoteServImpl implements internoteServ {
    @Autowired
    InternoteRepo internoteRepo;

    @Override
    public Internote findInternoteById(Long id) {
        return internoteRepo.findById(id).get();
    }

    @Override
    public Internote AddInternote(Internote internote) {
        return internoteRepo.save(internote);
    }

    @Override
    public Internote UpdateInternote(Internote internote) {
        return internoteRepo.save(internote);
    }

    @Override
    public void DeleteInternote(Long id) {
        internoteRepo.deleteById(id);
    }

    @Override
    public List<Internote> findAllInternote() {
        return internoteRepo.findAll();
    }

    @Override
    public Internote findLogin(String login) {
        return internoteRepo.findByLogin(login);
    }

    @Override
    public List<InternoteDtO> GETAllInternote() {
        List<Internote> internotes =internoteRepo.findAll();
        return internotes.stream()
                .map(Internote-> new InternoteDtO(Internote.getId(),Internote.getLogin(),Internote.getRole()))
                .collect(Collectors.toList());
    }
}
