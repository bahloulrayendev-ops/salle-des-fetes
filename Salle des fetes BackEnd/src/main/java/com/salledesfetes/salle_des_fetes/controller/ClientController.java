package com.salledesfetes.salle_des_fetes.controller;

import com.salledesfetes.salle_des_fetes.entity.Client;
import com.salledesfetes.salle_des_fetes.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping("/all")
    public List<Client> getAll() {
        return clientService.getAll();
    }

    @GetMapping("/{clientId}")
    public Client searchById(@PathVariable Long clientId) {
        return clientService.searchById(clientId);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Client>> searchClient(
            @RequestParam(required = false) String lastName,
            @RequestParam(required = false) String phone) {
        if (phone != null && !phone.trim().isEmpty()) {
            return ResponseEntity.ok(clientService.searchByPhoneContaining(phone));
        }
        if (lastName != null && !lastName.trim().isEmpty()) {
            return ResponseEntity.ok(clientService.searchByLastName(lastName));
        }
        return ResponseEntity.ok(clientService.getAll());
    }

    @PostMapping
    public void create(@RequestBody Client c) {
        clientService.create(c);
    }

    @PutMapping("/{clientId}")
    public Client update(@PathVariable Long clientId, @RequestBody Client c) {
        return clientService.update(clientId, c);
    }

    @DeleteMapping("/{clientId}")
    public void delete(@PathVariable Long clientId) {
        clientService.delete(clientId);
    }
}
