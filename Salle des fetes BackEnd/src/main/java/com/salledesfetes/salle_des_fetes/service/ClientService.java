package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.entity.Client;
import com.salledesfetes.salle_des_fetes.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<Client> getAll() {
        return clientRepository.findAll();
    }

    //Rechrche par nom
    public List<Client> searchByLastName(String lastName) {
        return clientRepository.findByLastNameContainingIgnoreCase(lastName);
    }

    //Rechrche par tel
    public List<Client> searchByPhoneContaining(String phone) {
        return clientRepository.findByPhoneContaining(phone);
    }

    //retourner un Client par son id
    public Client searchById(Long clientId) {

        return clientRepository.findById(clientId)
                .orElseThrow(() -> new RuntimeException("Aucun Client trouvé ayant l'id:" + clientId));
    }

    //modification et puis enregistrement d'une fiche Client
    public Client update(Long clientId, Client c) {
        Client ancien = searchById(clientId);
        ancien.setFirstName(c.getFirstName());
        ancien.setLastName(c.getLastName());
        ancien.setEmail(c.getEmail());
        ancien.setPhone(c.getPhone());
        ancien.setAddress(c.getAddress());
        return clientRepository.save(ancien); //enregistrement
    }

    //Création d'un nv Client
    public void create(Client c) {
        clientRepository.save(c);
    }

    //Suppression d'un Client
    public void delete(Long clientId) {
        clientRepository.deleteById(clientId);
    }
}
