package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.dto.FormuleRequestDTO;
import com.salledesfetes.salle_des_fetes.dto.FormuleResponseDTO;
import com.salledesfetes.salle_des_fetes.service.FormuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/formules")
public class FormuleController {

    @Autowired
    private FormuleService formuleService;

    @GetMapping
    public List<FormuleResponseDTO> getFormule() {
        return formuleService.getAll();
    }

    @GetMapping("/{formId}")
    public FormuleResponseDTO searchById(@PathVariable Long formId) {
        return formuleService.searchById(formId);
    }

    @PostMapping
    public FormuleResponseDTO create(@RequestBody FormuleRequestDTO dto) {
        return formuleService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        formuleService.delete(id);
    }

    @PutMapping("/{id}")
    public FormuleResponseDTO update(@PathVariable Long id, @RequestBody FormuleRequestDTO dto) {
        return formuleService.update(id, dto);
    }
}