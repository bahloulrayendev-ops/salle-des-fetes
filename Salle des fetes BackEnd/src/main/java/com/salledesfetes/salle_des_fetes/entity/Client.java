package com.salledesfetes.salle_des_fetes.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;
    @Column(length = 100)

    private String email;

    @Column(nullable = false, length = 20)
    private String phone;

    @Column(length = 200)
    private String address;
}
