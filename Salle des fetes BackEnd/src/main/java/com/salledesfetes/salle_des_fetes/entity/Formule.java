package com.salledesfetes.salle_des_fetes.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.salledesfetes.salle_des_fetes.enume.EventType;
import com.salledesfetes.salle_des_fetes.enume.PrincingType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity
@Setter
@Getter
public class Formule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Enumerated(EnumType.STRING)
    @Column(name = "event_type", nullable = false)
    private EventType eventType;

    @Enumerated(EnumType.STRING)
    @Column(name = "pricing_type", nullable = false)
    private PrincingType pricingType = PrincingType.par_jour;

    @Column(name = "price_per_day")
    private float pricePerDay;

    @Column(name = "price_per_hour")
    private float pricePerHour;

    @Column(name = "max_guests")
    private int maxGuests;
    
    @ManyToOne
    @JoinColumn(name = "salle_id", referencedColumnName = "id", nullable = false)
    private Salle salle;


}
