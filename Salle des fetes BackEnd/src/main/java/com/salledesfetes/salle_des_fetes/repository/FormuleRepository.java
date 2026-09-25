package com.salledesfetes.salle_des_fetes.repository;

import com.salledesfetes.salle_des_fetes.entity.Formule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FormuleRepository extends JpaRepository<Formule, Long> {
    List<Formule> findBySalleId(Long salleId);

    Formule searchById(Long formuleId);
}