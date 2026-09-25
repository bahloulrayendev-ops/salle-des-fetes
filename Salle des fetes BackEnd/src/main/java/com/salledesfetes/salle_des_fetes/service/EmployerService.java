package com.salledesfetes.salle_des_fetes.service;


import com.salledesfetes.salle_des_fetes.entity.Employer;
import com.salledesfetes.salle_des_fetes.enume.RoleList;
import com.salledesfetes.salle_des_fetes.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployerService {
    @Autowired
    private EmployerRepository employerRepository;

    public EmployerService(EmployerRepository employerRepository) {
        this.employerRepository = employerRepository;
    }

    public List<Employer> getAll() {
        return employerRepository.findAll();
    }

    //Rechrche empl par nom
    public List<Employer> searchByFirstName(String firstName) {

        return employerRepository.findByFirstName(firstName);
    }

    //Recherche empl par rol
    public List<Employer> searchByRole(RoleList role) {
        return employerRepository.findByRole(role);
    }

    //Retour Employer par id
    public Employer searchById(Long employerId) {

        return employerRepository.findById(employerId)
                .orElseThrow(() -> new RuntimeException("Aucun serveur trouvé avec l'id: " + employerId));
    }

    //modif fiche empl
    public Employer update(Long employerId, Employer c) {
        Employer ancien = searchById(employerId);
        ancien.setFirstName(c.getFirstName());
        ancien.setLastName(c.getLastName());
        ancien.setEmail(c.getEmail());
        ancien.setPhone(c.getPhone());
        ancien.setRole(c.getRole());
        return employerRepository.save(ancien);
    }

    //Création d'un nouveau Employer
    public void create(Employer e) {
        employerRepository.save(e);
    }

    //Suppression d'un Employer
    public void delete(Long id) {
        employerRepository.deleteById(id);
    }
}
