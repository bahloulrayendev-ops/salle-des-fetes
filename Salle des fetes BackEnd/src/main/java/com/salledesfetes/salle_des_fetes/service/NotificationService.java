package com.salledesfetes.salle_des_fetes.service;

import com.salledesfetes.salle_des_fetes.entity.Employer;
import com.salledesfetes.salle_des_fetes.entity.Notification;
import com.salledesfetes.salle_des_fetes.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<Notification> getAll() {
        return notificationRepository.findAll();
    }

    public Notification getById(Long id) {
        return notificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Notification non trouvée: " + id));
    }


    public void create(Notification c) {
        notificationRepository.save(c);
    }

    public void delete(Long notifId) {
        notificationRepository.deleteById(notifId);
    }

}