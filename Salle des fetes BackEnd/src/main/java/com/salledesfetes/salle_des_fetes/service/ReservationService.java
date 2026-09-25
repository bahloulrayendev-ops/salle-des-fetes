package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.dto.ReservationRequestDTO;
import com.salledesfetes.salle_des_fetes.dto.ReservationResponseDTO;
import com.salledesfetes.salle_des_fetes.entity.Client;
import com.salledesfetes.salle_des_fetes.entity.Formule;
import com.salledesfetes.salle_des_fetes.entity.Reservation;
import com.salledesfetes.salle_des_fetes.repository.ClientRepository;
import com.salledesfetes.salle_des_fetes.repository.FormuleRepository;
import com.salledesfetes.salle_des_fetes.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private FormuleRepository formuleRepository;
    @Autowired
    private ClientRepository clientRepository;
    private static final int duree = 60;

    public List<ReservationResponseDTO> getAll() {
        return reservationRepository.findAll()
                .stream()
                .map(ReservationResponseDTO::new)
                .toList();
    }

    public ReservationResponseDTO getById(Long id) {
        Reservation r = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Réservation non trouvée: " + id));
        return new ReservationResponseDTO(r);
    }

    public List<ReservationResponseDTO> getByFormule(Long formuleId) {
        return reservationRepository.findByFormuleId(formuleId)
                .stream()
                .map(ReservationResponseDTO::new)
                .toList();
    }

    public ReservationResponseDTO create(ReservationRequestDTO ResDto) {
        if (ResDto.getFormuleId() == null) {
            throw new RuntimeException("L'identifiant de la formule est requis.");
        }

        if (ResDto.getClientId() == null) {
            throw new RuntimeException("L'identifiant duclient est requis.");
        }

        Formule f = formuleRepository.findById(ResDto.getFormuleId())
                .orElseThrow(() -> new RuntimeException("Formule non trouvée: " + ResDto.getFormuleId()));
        Client c = clientRepository.findById(ResDto.getClientId())
                .orElseThrow(() -> new RuntimeException("Client non trouvé: " + ResDto.getClientId()));

        Reservation r = new Reservation();
        r.setEventDate(ResDto.getEventDate());
        r.setStartTime(ResDto.getStartTime());
        r.setEndTime(ResDto.getEndTime());
        r.setGuestsCount(ResDto.getGuestsCount());
        r.setComment(ResDto.getComment());
        r.setFormule(f);
        r.setClient(c);

        Reservation saved = reservationRepository.save(r);
        return new ReservationResponseDTO(saved);
    }

    public ReservationResponseDTO update(Long id, ReservationRequestDTO r0) {
        Reservation ResDto = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Réservation non trouvée: " + id));
        ResDto.setEventDate(ResDto.getEventDate());
        ResDto.setStartTime(ResDto.getStartTime());
        ResDto.setEndTime(ResDto.getEndTime());
        ResDto.setGuestsCount(ResDto.getGuestsCount());
        ResDto.setComment(ResDto.getComment());
        Reservation r1 = reservationRepository.save(ResDto);
        return new ReservationResponseDTO(r1);
    }

    public void delete(Long id) {
        reservationRepository.deleteById(id);
    }

}