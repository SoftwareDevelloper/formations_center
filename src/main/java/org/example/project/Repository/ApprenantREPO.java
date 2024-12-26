package org.example.project.Repository;

import jakarta.transaction.Transactional;
import org.example.project.Model.Apprenant;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface ApprenantREPO extends JpaRepository<Apprenant, Long> {

    @Query("SELECT COUNT(a) > 0 FROM Apprenant a WHERE a.email = :email")
    boolean existsByEmail(@Param("email") String email);

    @Query(value = "SELECT a FROM  Apprenant a WHERE a.email = ?1")
    Apprenant getByEmail(String email);
}
