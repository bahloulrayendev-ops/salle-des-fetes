package com.salledesfetes.salle_des_fetes.repository;

import com.salledesfetes.salle_des_fetes.entity.Reservation;
import com.salledesfetes.salle_des_fetes.enume.MessageStatList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByFormuleId(Long formuleId);

    List<Reservation> findByFormuleSalleIdAndEventDateAndMessageStatus(Long salleId, LocalDate date, MessageStatList status);
}