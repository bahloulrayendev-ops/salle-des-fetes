package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.entity.Disponibilite;
import com.salledesfetes.salle_des_fetes.service.DisponibiliteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@RestController
@RequestMapping("/disponibilites")

public class DisponibiliteController {
    @Autowired
    private DisponibiliteService disponibiliteService;

    @GetMapping
    public List<Disponibilite> getAll() {
        return disponibiliteService.getAll();
    }

    @GetMapping("/{id}")
    public List<Disponibilite> getById(@PathVariable Long id) {
        return disponibiliteService.getDisponibiliteByid(id);
    }

    @GetMapping("/available")
    public List<Disponibilite> findAvailable(
            @RequestParam LocalDate date,
            @RequestParam LocalTime start,
            @RequestParam LocalTime end) {
        return disponibiliteService.searchDisponibilite(date, start, end);
    }

    @PostMapping
    public void create(@RequestBody Disponibilite dis) {
        disponibiliteService.create(dis);
    }

    @DeleteMapping("/{disId}")
    public void delete(@PathVariable Long disId) {
        disponibiliteService.delete(disId);
    }

}
