package com.salledesfetes.salle_des_fetes.dto;

import com.salledesfetes.salle_des_fetes.entity.Reservation;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class ReservationResponseDTO {
    private Long id;
    private LocalDate eventDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private Integer guestsCount;
    private String comment;
    private String status;
    private String balanceStatus;

    private Long formuleId;
    private String formuleName;
    private String salleName;
    private Long clientId;
    private String clientFirstName;
    private String clientLastName;

    public ReservationResponseDTO(Reservation r) {
        this.id = r.getId();
        this.eventDate = r.getEventDate();
        this.startTime = r.getStartTime();
        this.endTime = r.getEndTime();
        this.guestsCount = r.getGuestsCount();
        this.comment = r.getComment();
        this.status = r.getMessageStatus().name();
        this.balanceStatus = r.getBalanceStatus().name();

        this.formuleId = r.getFormule().getId();
        this.formuleName = r.getFormule().getName();
        this.salleName = r.getFormule().getSalle().getName();

        this.clientId = r.getClient().getId();
        this.clientFirstName = r.getClient().getFirstName();
        this.clientLastName = r.getClient().getLastName();
    }
}