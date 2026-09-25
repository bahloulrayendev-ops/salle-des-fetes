package com.salledesfetes.salle_des_fetes.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.salledesfetes.salle_des_fetes.enume.ChannelList;
import com.salledesfetes.salle_des_fetes.enume.RecieverList;
import com.salledesfetes.salle_des_fetes.enume.MessageStatList;
import com.salledesfetes.salle_des_fetes.enume.TypeNotif;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(nullable = false, name = "receiver_type")
    @Enumerated(EnumType.STRING)
    private RecieverList receiver_type;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ChannelList channel;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private TypeNotif type;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String message;

    @Column(name = "sent_date", insertable = false, updatable = false)
    private LocalDateTime sentDate = LocalDateTime.now();


    @Column()
    @Enumerated(EnumType.STRING)
    private MessageStatList status = MessageStatList.en_attente;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "receiver_client_id", referencedColumnName = "id")
    private Client client;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "receiver_employer_id", referencedColumnName = "id")
    private Employer employer;
}
