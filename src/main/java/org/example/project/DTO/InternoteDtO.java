package org.example.project.DTO;

import jakarta.persistence.*;
import org.example.project.Model.Internote;

@Entity
public class InternoteDtO {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String login;
    @Enumerated(EnumType.STRING)
    private Internote.Role role;

    public InternoteDtO(Long id, String login, Internote.Role role) {
        this.id = id;
        this.login = login;
        this.role = role;
    }

    public enum Role {
        ADMIN,
        ENSEIGNANT
    }
    public InternoteDtO() {
    }
    public InternoteDtO(String login, Internote.Role role) {
        this.login = login;
        this.role = role;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }


    public Internote.Role getRole() {
        return role;
    }
    public void setRole(Internote.Role role) {
        this.role = role;
    }

}
