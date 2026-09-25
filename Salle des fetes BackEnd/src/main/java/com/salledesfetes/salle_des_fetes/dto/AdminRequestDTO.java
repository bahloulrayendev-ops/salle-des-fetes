package com.salledesfetes.salle_des_fetes.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminRequestDTO {
    private String username;
    private String password;
    private String fullName;
}
