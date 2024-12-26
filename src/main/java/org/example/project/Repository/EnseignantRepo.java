package org.example.project.Repository;

import jakarta.transaction.Transactional;
import org.example.project.Model.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface EnseignantRepo extends JpaRepository<Enseignant, Long>{}
