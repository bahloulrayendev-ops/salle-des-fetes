package com.salledesfetes.salle_des_fetes.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.salledesfetes.salle_des_fetes.enume.BalanceStat;
import com.salledesfetes.salle_des_fetes.enume.ReservationStatList;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;


@Entity
@Getter
@Setter
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "event_date", nullable = false)
    private LocalDate eventDate;

    @Column(name = "start_time", nullable = false)
    private LocalTime startTime;

    @Column(name = "end_time", nullable = false)
    private LocalTime endTime;

    @Column(name = "guests_count")
    private Integer guestsCount;

    @Column(name = "comment", columnDefinition = "text")
    private String comment;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private ReservationStatList messageStatus = ReservationStatList.en_attente;

    @Enumerated(EnumType.STRING)
    @Column(name = "balance_status", nullable = false)
    private BalanceStat balanceStatus = BalanceStat.acompte_verse;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "formule_id", referencedColumnName = "id", nullable = false)
    private Formule formule;

    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id", nullable = false)
    private Client client;


}
