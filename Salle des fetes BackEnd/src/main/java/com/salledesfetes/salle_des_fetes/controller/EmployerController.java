package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.entity.Employer;
import com.salledesfetes.salle_des_fetes.enume.RoleList;
import com.salledesfetes.salle_des_fetes.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employers")
public class EmployerController {
    @Autowired
    public EmployerService employerService;

    @GetMapping
    public Employer getById(@PathVariable Long id) {
        return employerService.searchById(id);
    }

    @GetMapping("/search")
    public List<Employer> search(
            @RequestParam(required = false) String firstName,
            @RequestParam(required = false) RoleList role) {
        if (firstName != null) return employerService.searchByFirstName(firstName);
        if (role != null) return employerService.searchByRole(role);
        return employerService.getAll();
    }

    @PostMapping
    public void create(@RequestBody Employer e) {
        employerService.create(e);
    }

    @PutMapping("/{id}")
    public Employer update(@PathVariable Long id, @RequestBody Employer e) {
        return employerService.update(id, e);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        employerService.delete(id);
    }
}
