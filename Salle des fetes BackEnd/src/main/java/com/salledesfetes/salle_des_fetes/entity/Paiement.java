package com.salledesfetes.salle_des_fetes.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.salledesfetes.salle_des_fetes.enume.MethodPaiementList;
import com.salledesfetes.salle_des_fetes.enume.TypePaiementList;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Paiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "payment_date", nullable = false)
    private LocalDate paymentDate;

    @Column(nullable = false)
    private BigDecimal amount;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TypePaiementList type;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private MethodPaiementList method;

    @Column(columnDefinition = "text")
    private String note;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "reservation_id", referencedColumnName = "id", nullable = false)
    private Reservation reservation;


}
