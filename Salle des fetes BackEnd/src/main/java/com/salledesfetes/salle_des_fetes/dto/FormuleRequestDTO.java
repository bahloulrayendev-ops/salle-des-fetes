package com.salledesfetes.salle_des_fetes.dto;

import com.salledesfetes.salle_des_fetes.enume.EventType;
import com.salledesfetes.salle_des_fetes.enume.PrincingType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FormuleRequestDTO {
    private String name;
    private EventType eventType;
    private PrincingType pricingType;
    private float pricePerDay;
    private float pricePerHour;
    private int maxGuests;
    private Long salleId;
}