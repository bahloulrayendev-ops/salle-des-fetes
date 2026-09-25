package com.salledesfetes.salle_des_fetes.repository;

import com.salledesfetes.salle_des_fetes.entity.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.time.LocalDate;

public interface PaiementRepository extends JpaRepository<Paiement, Long> {
    List<Paiement> findByReservationClientId(Long clientId);

    List<Paiement> findByReservationFormuleSalleId(Long salleId);

    List<Paiement> findByPaymentDateBetween(LocalDate start, LocalDate end);
}