package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.entity.Paiement;
import com.salledesfetes.salle_des_fetes.service.PaiementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping("/paiements")
public class PaiementController {
    @Autowired
    private PaiementService paiementService;

    @GetMapping
    public List<Paiement> getAll() {
        return paiementService.getAll();
    }

    @GetMapping("/{id}")
    public Paiement getById(@PathVariable Long id) {
        return paiementService.searchById(id);
    }

    @GetMapping("/par-client/{clientId}")
    public List<Paiement> getByClient(@PathVariable Long clientId) {
        return paiementService.searchByReservationClientId(clientId);
    }

    @GetMapping("/par-salle/{salleId}")
    public List<Paiement> getBySalle(@PathVariable Long salleId) {
        return paiementService.searchByReservationFormuleSalleId(salleId);
    }

    @GetMapping("/par-period")
    public List<Paiement> getByPeriod(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate start,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate end) {
        return paiementService.searchByPaymentDateBetween(start, end);
    }

    @PostMapping
    public void create(@RequestBody Paiement p) {
        paiementService.create(p);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        paiementService.delete(id);
    }
}