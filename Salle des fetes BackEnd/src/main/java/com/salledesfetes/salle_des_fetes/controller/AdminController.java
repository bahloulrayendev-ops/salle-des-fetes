package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.dto.AdminRequestDTO;
import com.salledesfetes.salle_des_fetes.dto.AdminResponseDTO;
import com.salledesfetes.salle_des_fetes.dto.LoginRequestDTO;
import com.salledesfetes.salle_des_fetes.entity.Admin;
import com.salledesfetes.salle_des_fetes.repository.AdminRepository;
import com.salledesfetes.salle_des_fetes.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;
    private AdminRepository adminRepository;

    public AdminController(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @GetMapping("/{id}")
    public AdminResponseDTO getById(@PathVariable Long id) {
        return adminService.getByIdDto(id);
    }

    @GetMapping
    public List<AdminResponseDTO> getAll() {
        return adminRepository.findAll()
                .stream()
                .map(AdminResponseDTO::new)
                .toList();
    }

    @PostMapping
    public AdminResponseDTO create(@RequestBody AdminRequestDTO dto) {
        return adminService.create(dto);
    }

    @PostMapping("/login")
    public AdminResponseDTO login(@RequestBody LoginRequestDTO dto) {
        return adminService.login(dto.getUsername(), dto.getPassword());
    }

    @PutMapping("/{AdminId}")
    public Admin update(@PathVariable Long AdminId, @RequestBody Admin a) {
        return adminService.update(AdminId, a);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        adminService.delete(id);
    }
}