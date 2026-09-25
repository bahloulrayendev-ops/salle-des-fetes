package com.salledesfetes.salle_des_fetes.dto;

import com.salledesfetes.salle_des_fetes.entity.Formule;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class FormuleResponseDTO {
    private Long id;
    private String name;
    private String eventType;
    private String pricingType;
    private float pricePerDay;
    private float pricePerHour;
    private int maxGuests;
    private Long salleId;
    private String salleName;

    public FormuleResponseDTO(Formule f) {
        this.id = f.getId();
        this.name = f.getName();
        this.eventType = f.getEventType().name();
        this.pricingType = f.getPricingType().name();
        this.pricePerDay = f.getPricePerDay();
        this.pricePerHour = f.getPricePerHour();
        this.maxGuests = f.getMaxGuests();
        this.salleId = f.getSalle().getId();
        this.salleName = f.getSalle().getName();
    }
}