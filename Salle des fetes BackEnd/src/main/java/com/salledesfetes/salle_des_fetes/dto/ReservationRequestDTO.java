package com.salledesfetes.salle_des_fetes.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class ReservationRequestDTO {
    private LocalDate eventDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer guestsCount;
    private String comment;
    private Long formuleId;
    private Long clientId;
}