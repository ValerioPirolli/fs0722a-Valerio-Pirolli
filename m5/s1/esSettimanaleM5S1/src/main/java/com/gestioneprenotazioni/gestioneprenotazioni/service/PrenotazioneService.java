package com.gestioneprenotazioni.gestioneprenotazioni.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Postazione;
import com.gestioneprenotazioni.gestioneprenotazioni.repository.PostazioneRepository;
import com.gestioneprenotazioni.gestioneprenotazioni.repository.PrenotazioneRepository;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Utente;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Prenotazione;
import com.gestioneprenotazioni.gestioneprenotazioni.model.TipoPostazione;

import java.time.LocalDate;
import java.util.List;

@Service
public class PrenotazioneService {
    
    @Autowired
    private PrenotazioneRepository prenotazioneRepository;

    @Autowired
    private PostazioneRepository postazioneRepository;


    public boolean isLiberaPerData(LocalDate data, Postazione postazione) {
         if(prenotazioneRepository.findByPostazioneAndData(postazione, data) instanceof Prenotazione){
         return true;
         }
         else{
            return false;
         }
    }


    public Prenotazione init(Postazione postazione, LocalDate data, Utente utente) {

        if (!isLiberaPerData(data, postazione)) {
            System.out.println("La postazione " + postazione.getCodice() + " non è disponibile per la data " + data);
        }
        if (prenotazioneRepository.findByPostazioneAndData(postazione, data) instanceof Prenotazione) {
            System.out.println("L'utente " + utente.getUsername() + " ha già prenotato la postazione " + postazione.getCodice() + " per la data " + data);
        }
        Prenotazione prenotazione = new Prenotazione(utente,postazione,data);
        return prenotazioneRepository.save(prenotazione);
    }

    
    public void cancellaPrenotazione(Prenotazione prenotazione) {
        prenotazioneRepository.delete(prenotazione);
    }

    
    public List<Postazione> cercaPostazioniPerTipoECitta(TipoPostazione tipo, String citta) {
        return postazioneRepository.findByTipoAndEdificioCitta(tipo, citta);
    }

    
    public List<Prenotazione> getPrenotazioniUtente(Utente utente) {
        return prenotazioneRepository.findByUtente(utente);
    }

}
