package org.example.project.Repository;

import org.example.project.Model.Inscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InscriptionRepo extends JpaRepository<Inscription, Long> {

}
