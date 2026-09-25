package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.dto.FormuleRequestDTO;
import com.salledesfetes.salle_des_fetes.dto.FormuleResponseDTO;
import com.salledesfetes.salle_des_fetes.entity.Formule;
import com.salledesfetes.salle_des_fetes.entity.Salle;
import com.salledesfetes.salle_des_fetes.repository.FormuleRepository;
import com.salledesfetes.salle_des_fetes.repository.SalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormuleService {

    @Autowired
    private FormuleRepository formuleRepository;

    @Autowired
    private SalleRepository salleRepository;

    public List<FormuleResponseDTO> getAll() {
        return formuleRepository.findAll()
                .stream()
                .map(FormuleResponseDTO::new)
                .toList();
    }

    public FormuleResponseDTO searchById(Long formuleId) {
        Formule f = formuleRepository.findById(formuleId)
                .orElseThrow(() -> new RuntimeException("Aucune Formule trouvée ayant l'id: " + formuleId));
        return new FormuleResponseDTO(f);
    }

    public FormuleResponseDTO create(FormuleRequestDTO dto) {
        if (dto.getSalleId() == null) {
            throw new RuntimeException("L'identifiant de la salle est requis.");
        }

        Salle salle = salleRepository.findById(dto.getSalleId())
                .orElseThrow(() -> new RuntimeException("Salle non trouvée: " + dto.getSalleId()));

        Formule f = new Formule();
        f.setName(dto.getName());
        f.setEventType(dto.getEventType());
        f.setPricingType(dto.getPricingType());
        f.setPricePerDay(dto.getPricePerDay());
        f.setPricePerHour(dto.getPricePerHour());
        f.setMaxGuests(dto.getMaxGuests());
        f.setSalle(salle);

        Formule saved = formuleRepository.save(f);
        return new FormuleResponseDTO(saved);
    }

    public FormuleResponseDTO update(Long formuleId, FormuleRequestDTO dto) {
        Formule existing = formuleRepository.findById(formuleId)
                .orElseThrow(() -> new RuntimeException("Aucune Formule trouvée ayant l'id: " + formuleId));

        existing.setName(dto.getName());
        existing.setEventType(dto.getEventType());
        existing.setPricingType(dto.getPricingType());
        existing.setPricePerDay(dto.getPricePerDay());
        existing.setPricePerHour(dto.getPricePerHour());
        existing.setMaxGuests(dto.getMaxGuests());

        Formule saved = formuleRepository.save(existing);
        return new FormuleResponseDTO(saved);
    }

    public void delete(Long formuleId) {
        formuleRepository.deleteById(formuleId);
    }
}