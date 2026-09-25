package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.dto.AdminRequestDTO;
import com.salledesfetes.salle_des_fetes.dto.AdminResponseDTO;
import com.salledesfetes.salle_des_fetes.entity.Admin;
import com.salledesfetes.salle_des_fetes.entity.Employer;
import com.salledesfetes.salle_des_fetes.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private final AdminRepository adminRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminService(AdminRepository adminRepository, PasswordEncoder passwordEncoder) {
        this.adminRepository = adminRepository;
        this.passwordEncoder = passwordEncoder;
    }


    public AdminResponseDTO getByIdDto(Long id) {
        Admin a = adminRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Admin non trouvé: " + id));
        return new AdminResponseDTO(a);
    }

    public Admin getById(Long adminId) {
        return adminRepository.findById(adminId)
                .orElseThrow(() -> new RuntimeException("Aucun admin trouvé avec l'id: " + adminId));
    }

    public Optional<Admin> searchByUsername(String username) {
        return adminRepository.findByUsername(username);
    }

    public List<Admin> getAll() {
        return adminRepository.findAll();
    }

    public AdminResponseDTO create(AdminRequestDTO dto) {
        Admin a = new Admin();
        a.setUsername(dto.getUsername());
        a.setPassword(passwordEncoder.encode(dto.getPassword()));
        a.setFullName(dto.getFullName());
        Admin saved = adminRepository.save(a);
        return new AdminResponseDTO(saved);
    }

    public AdminResponseDTO login(String username, String Password) {
        Admin a = adminRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("Identifiants invalides."));

        boolean matches = passwordEncoder.matches(Password, a.getPassword());
        if (!matches) {
            throw new RuntimeException("Identifiants invalides.");
        }
        return new  AdminResponseDTO(a);
    }

    public void delete(Long id) {
        adminRepository.deleteById(id);
    }

    public Admin update(Long AdminId, Admin a) {
        Admin ancien = getById(AdminId);
        ancien.setFullName(a.getFullName());
        ancien.setUsername(a.getUsername());
        if (a.getPassword() != null) {
            ancien.setPassword(passwordEncoder.encode(a.getPassword()));
        }
        return adminRepository.save(ancien);
    }
}
