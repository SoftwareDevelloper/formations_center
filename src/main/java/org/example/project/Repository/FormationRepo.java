package org.example.project.Repository;

import org.example.project.Model.Formations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FormationRepo extends JpaRepository<Formations,Long> {
    @Query("SELECT F FROM Formations F where F.title=?1")
    Formations findByTitle(String title);
}
