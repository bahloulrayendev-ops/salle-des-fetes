package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.entity.Affectation;
import com.salledesfetes.salle_des_fetes.service.AffectationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/affectations")
public class AffectationController {

    @Autowired
    private AffectationService affectationService;

    @GetMapping
    public List<Affectation> getAll() {
        return affectationService.getAll();
    }

    @GetMapping("/{id}")
    public Affectation getById(@PathVariable Long id) {
        return affectationService.getById(id);
    }

    @GetMapping("/by-reservation/{reservationId}")
    public List<Affectation> getByReservation(@PathVariable Long reservationId) {
        return affectationService.getByReservation(reservationId);
    }

    @GetMapping("/by-employer/{employerId}")
    public List<Affectation> getByEmployer(@PathVariable Long employerId) {
        return affectationService.getByEmployer(employerId);
    }

    @PostMapping
    public Affectation createAffectation(@RequestBody Affectation a) {
        return affectationService.create(a);
    }

    @PutMapping("/confirm/{id}")
    public Affectation confirm(@PathVariable Long id) {
        return affectationService.confirm(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        affectationService.delete(id);
    }

    @PutMapping
    public Affectation update(@PathVariable Long affId, @RequestBody Affectation a) {
        return affectationService.update(affId, a);
    }
}