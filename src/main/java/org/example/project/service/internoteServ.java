package org.example.project.service;

import jakarta.transaction.Transactional;
import org.example.project.DTO.InternoteDtO;
import org.example.project.Model.Internote;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public interface internoteServ {
    public Internote findInternoteById(Long id);
    public Internote AddInternote(Internote internote);
    public Internote UpdateInternote(Internote internote);
    public void DeleteInternote(Long id);
    public List<Internote> findAllInternote();
    public Internote findLogin(String login);
    public List<InternoteDtO> GETAllInternote();

}
