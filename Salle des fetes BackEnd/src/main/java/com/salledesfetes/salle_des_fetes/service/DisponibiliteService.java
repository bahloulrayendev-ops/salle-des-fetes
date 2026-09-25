package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.entity.Disponibilite;
import com.salledesfetes.salle_des_fetes.repository.DisponibiliteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class DisponibiliteService {
    private static final int employee_duree = 60;
    @Autowired
    private DisponibiliteRepository disponibiliteRepository;

    public DisponibiliteService(DisponibiliteRepository disponibiliteRepository) {
        this.disponibiliteRepository = disponibiliteRepository;
    }

    public List<Disponibilite> getDisponibiliteByid(Long id) {
        return disponibiliteRepository.searchById(id);
    }

    public List<Disponibilite> getAll() {
        return disponibiliteRepository.findAll();
    }

    //Rechrche Par date, time ,true
    public List<Disponibilite> searchDisponibilite(LocalDate date, LocalTime startTime, LocalTime endTime) {
        return disponibiliteRepository.findByDateAndStartTimeAndEndTimeAndAvailableTrue(date, startTime, endTime);
    }

    //Crééation d'un creneau
    public void create(Disponibilite creneau) {
        disponibiliteRepository.save(creneau);
    }

    //Suppression d'un créneau
    public void delete(Long creneauId) {
        disponibiliteRepository.deleteById(creneauId);
    }

    public boolean isEmployeeAvailable(Long employerId, LocalDate eventDate, LocalTime eventStart, LocalTime eventEnd) {
        LocalTime startminimum = eventStart.minusMinutes(employee_duree);
        LocalTime endminimum = eventEnd.plusMinutes(employee_duree);

        List<Disponibilite> liste = disponibiliteRepository.findByEmployerIdAndDateAndAvailableTrue(employerId, eventDate);

        return liste.stream().anyMatch(item ->
                !item.getStartTime().isAfter(startminimum) && !item.getEndTime().isBefore(endminimum));
    }
}
