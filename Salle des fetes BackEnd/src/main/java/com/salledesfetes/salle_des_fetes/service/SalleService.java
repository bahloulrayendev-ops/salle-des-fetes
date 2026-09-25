package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.entity.Salle;
import com.salledesfetes.salle_des_fetes.repository.SalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalleService {
    @Autowired
    private SalleRepository salleRepository;

    public SalleService(SalleRepository salleRepository) {
        this.salleRepository = salleRepository;
    }

    public List<Salle> getAllActiveSalles() {
        return salleRepository.findByActiveTrue();
    }

    public List<Salle> getAll() {
        return salleRepository.findAll();
    }

    public Salle getById(Long id) {
        Salle s = salleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Salle non trouvée: " + id));
        return s;
    }

    public Salle update(Long salleId, Salle s) {
        Salle ancien = salleRepository.getById(salleId);
        ancien.setName(s.getName());
        ancien.setAddress(s.getAddress());
        ancien.setCapacity(s.getCapacity());
        ancien.setDescription(s.getDescription());
        return salleRepository.save(ancien);
    }


    public void deactivation(Long salleId) {
        Salle s = salleRepository.getById(salleId);
        s.setActive(false);
        salleRepository.save(s);
    }

    public List<Salle> searchByActiveTrue() {
        return salleRepository.findByActiveTrue();
    }

    public void create(Salle s) {
        salleRepository.save(s);
    }

    public void delete(Long salleId) {
        salleRepository.deleteById(salleId);
    }

}
