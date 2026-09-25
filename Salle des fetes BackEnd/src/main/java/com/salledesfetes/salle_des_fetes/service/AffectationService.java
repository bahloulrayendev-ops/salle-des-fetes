package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.entity.Admin;
import com.salledesfetes.salle_des_fetes.entity.Affectation;
import com.salledesfetes.salle_des_fetes.entity.Reservation;
import com.salledesfetes.salle_des_fetes.repository.AffectationRepository;
import com.salledesfetes.salle_des_fetes.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class AffectationService {

    @Autowired
    private AffectationRepository affectationRepository;

    @Autowired
    private DisponibiliteService disponibiliteService;

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Affectation> getAll() {
        return affectationRepository.findAll();
    }

    public Affectation getById(Long id) {
        return affectationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Affectation non trouvée: " + id));
    }

    public List<Affectation> getByReservation(Long reservationId) {
        return affectationRepository.findByReservationId(reservationId);
    }

    public List<Affectation> getByEmployer(Long employerId) {
        return affectationRepository.findByEmployerId(employerId);
    }

    public Affectation create(Affectation a) {
        if (a.getReservation() == null || a.getReservation().getId() == null) {
            throw new RuntimeException("L'identifiant de la réservation est requis.");
        }
        if (a.getEmployer() == null || a.getEmployer().getId() == null) {
            throw new RuntimeException("L'identifiant du serveur est requis.");
        }

        Reservation reservation = reservationRepository.findById(a.getReservation().getId())
                .orElseThrow(() -> new RuntimeException("Réservation non trouvée: " + a.getReservation().getId()));

        LocalDate eventDate = reservation.getEventDate();
        LocalTime eventStart = reservation.getStartTime();
        LocalTime eventEnd = reservation.getEndTime();

        boolean available = disponibiliteService.isEmployeeAvailable(
                a.getEmployer().getId(), eventDate, eventStart, eventEnd
        );

        if (!available) {
            throw new RuntimeException(
                    "Ce serveur n'est pas disponible pour ce créneau (avec la marge d'1 heure requise avant/après)."
            );
        }

        a.setReservation(reservation);
        return affectationRepository.save(a);
    }

    public Affectation confirm(Long id) {
        Affectation a = getById(id);
        a.setConfirmed(true);
        return affectationRepository.save(a);
    }

    public void delete(Long id) {
        affectationRepository.deleteById(id);
    }

    public Affectation update(Long affId, Affectation a) {
        Affectation ancien = getById(affId);
        ancien.setRole(a.getRole());
        if (a.getConfirmed() == false && ancien.getConfirmed() == true) {
            ancien.setConfirmed(a.getConfirmed());
        }
        ancien.setEmployer(a.getEmployer());
        ancien.setReservation(a.getReservation());
        return affectationRepository.save(ancien);
    }
}