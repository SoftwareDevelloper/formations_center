package org.example.project.Repository;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import jakarta.transaction.Transactional;
import org.example.project.Model.Internote;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface InternoteRepo extends JpaRepository<Internote, Long> {
    @Query("SELECT i FROM Internote i WHERE i.Login = ?1")
    Internote findByLogin(String login);}

//@Query("SELECT COUNT(i) > 0 FROM Internote i WHERE i.email = ?1")
//boolean existsByEmail(String email);


