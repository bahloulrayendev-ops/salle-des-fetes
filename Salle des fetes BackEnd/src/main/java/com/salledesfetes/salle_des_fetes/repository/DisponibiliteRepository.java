package com.salledesfetes.salle_des_fetes.repository;

import com.salledesfetes.salle_des_fetes.entity.Disponibilite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface DisponibiliteRepository extends JpaRepository<Disponibilite, Long> {
    List<Disponibilite> findByDateAndStartTimeAndEndTimeAndAvailableTrue(LocalDate date, LocalTime startTime, LocalTime endTime);

    List<Disponibilite> searchById(Long id);

    List<Disponibilite> findByEmployerIdAndDateAndAvailableTrue(Long employerId, LocalDate date);
}