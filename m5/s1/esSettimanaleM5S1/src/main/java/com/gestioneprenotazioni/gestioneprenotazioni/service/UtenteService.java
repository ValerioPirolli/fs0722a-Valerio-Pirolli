package com.gestioneprenotazioni.gestioneprenotazioni.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Utente;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Prenotazione;
import com.gestioneprenotazioni.gestioneprenotazioni.repository.UtenteRepository;

import java.util.List;
import java.util.ArrayList;

@Service
public class UtenteService {
    
    @Autowired
    private UtenteRepository utenteRepository;
    
   
    public Utente getUtenteByUsername(String username) {
        if(utenteRepository.findByUsername(username) instanceof Utente){
          Utente utente= utenteRepository.findByUsername(username);
            return utente;
        }
        else{
            System.out.println("Utente non trovato");
            return  null;
        }
    }
   
    public Utente init(String username, String nomeCompleto, String email) {
        if (utenteRepository.findByUsername(username) != null) {
            System.out.println("Username già esistente");
            return null;
        }
        else{
        List<Prenotazione> prenotazioni = new ArrayList<Prenotazione>();
        Utente utente = new Utente(username, nomeCompleto, email,prenotazioni);
        return utenteRepository.save(utente);
        }
    }

    public Utente init(Utente utente) {
        return utenteRepository.save(utente);
    }

    public void delete(Utente utente) {
        utenteRepository.delete(utente);
    }

    public Utente findById(Long id) {
        return utenteRepository.findById(id).get();
    }

    public void update(Utente utente) {
        utenteRepository.save(utente);
    }

}
