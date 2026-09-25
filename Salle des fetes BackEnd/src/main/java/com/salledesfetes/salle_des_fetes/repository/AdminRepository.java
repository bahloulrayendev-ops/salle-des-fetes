package com.salledesfetes.salle_des_fetes.repository;

import com.salledesfetes.salle_des_fetes.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin, Long> {
    Optional<Admin> findByUsername(String username);
}   