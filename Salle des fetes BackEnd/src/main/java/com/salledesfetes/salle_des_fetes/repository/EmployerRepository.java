package com.salledesfetes.salle_des_fetes.repository;

import com.salledesfetes.salle_des_fetes.entity.Employer;
import com.salledesfetes.salle_des_fetes.enume.RoleList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployerRepository extends JpaRepository<Employer, Long> {
    // Change findByFirst_name to:
    List<Employer> findByFirstName(String firstName);

    List<Employer> findByRole(RoleList role);

    Employer findById(long employerid);
}