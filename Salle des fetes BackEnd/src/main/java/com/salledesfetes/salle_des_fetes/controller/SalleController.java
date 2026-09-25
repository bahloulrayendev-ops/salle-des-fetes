package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.entity.Salle;
import com.salledesfetes.salle_des_fetes.service.SalleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SalleController {
    @Autowired
    public SalleService salleService;

    @GetMapping("/salles/active")
    public List<Salle> findByActiveTrue() {
        return salleService.getAllActiveSalles();
    }

    @GetMapping("/salles")
    public List<Salle> findAll() {
        return salleService.getAll();
    }

    @GetMapping("/salles/{salleId}")
    public Salle findById(@PathVariable Long salleId) {
        return salleService.getById(salleId);
    }

    @PutMapping("/salles/{salleId}")
    public Salle update(@PathVariable Long salleId, @RequestBody Salle salle) {
        return salleService.update(salleId, salle);
    }

    @DeleteMapping("/salles/{salleId}")
    public void deleteById(@PathVariable Long salleId) {
        salleService.delete(salleId);
    }

    @PostMapping("/salles/create")
    public void create(@RequestBody Salle salle) {
        salleService.create(salle);
    }
}
