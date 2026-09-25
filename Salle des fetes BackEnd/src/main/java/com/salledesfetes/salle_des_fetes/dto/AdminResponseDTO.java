package com.salledesfetes.salle_des_fetes.dto;

import com.salledesfetes.salle_des_fetes.entity.Admin;
import com.salledesfetes.salle_des_fetes.service.AdminService;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminResponseDTO {
    private Long id;
    private String username;
    private String fullName;

    public AdminResponseDTO(Admin a) {
        this.id = a.getId();
        this.username = a.getUsername();
        this.fullName = a.getFullName();
    }
}
