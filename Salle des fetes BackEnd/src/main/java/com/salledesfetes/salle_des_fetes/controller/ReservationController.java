package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.dto.ReservationRequestDTO;
import com.salledesfetes.salle_des_fetes.dto.ReservationResponseDTO;
import com.salledesfetes.salle_des_fetes.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;

    @GetMapping
    public List<ReservationResponseDTO> getAll() {
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public ReservationResponseDTO getById(@PathVariable Long id) {
        return reservationService.getById(id);
    }

    @GetMapping("/parFormule/{formuleId}")
    public List<ReservationResponseDTO> getByFormule(@PathVariable Long formuleId) {
        return reservationService.getByFormule(formuleId);
    }

    @PostMapping
    public ReservationResponseDTO create(@RequestBody ReservationRequestDTO dto) {
        return reservationService.create(dto);
    }

    @PutMapping("/{id}")
    public ReservationResponseDTO update(@PathVariable Long id, @RequestBody ReservationRequestDTO dto) {
        return reservationService.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reservationService.delete(id);
    }
}