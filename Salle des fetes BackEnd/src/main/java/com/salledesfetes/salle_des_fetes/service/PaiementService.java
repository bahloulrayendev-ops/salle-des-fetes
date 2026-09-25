package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.entity.Paiement;
import com.salledesfetes.salle_des_fetes.repository.ClientRepository;
import com.salledesfetes.salle_des_fetes.repository.PaiementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PaiementService {
    @Autowired
    public PaiementRepository paiementRepository;

    public PaiementService(ClientRepository clientRepository) {
        this.paiementRepository = paiementRepository;
    }

    public List<Paiement> getAll() {
        return paiementRepository.findAll();
    }

    public Paiement searchById(Long paiementId) {
        return paiementRepository.findById(paiementId)
                .orElseThrow(() -> new RuntimeException("Aucun Paiement trouvé ayant l'id:" + paiementId));
    }

    //affiche liste paiemetns par Client id
    public List<Paiement> searchByReservationClientId(Long clientId) {
        return paiementRepository.findByReservationClientId(clientId);
    }

    //affiche liste Paiement par Salle id
    public List<Paiement> searchByReservationFormuleSalleId(Long salleId) {
        return paiementRepository.findByReservationFormuleSalleId(salleId);
    }

    //affiche liste Paiement dans une periode
    public List<Paiement> searchByPaymentDateBetween(LocalDate start, LocalDate end) {
        return paiementRepository.findByPaymentDateBetween(start, end);
    }


    public void create(Paiement c) {
        paiementRepository.save(c);
    }

    public void delete(Long paiementId) {
        paiementRepository.deleteById(paiementId);
    }

}
