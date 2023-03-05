package com.gestioneprenotazioni.gestioneprenotazioni.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Prenotazione;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Utente;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Postazione;

import java.time.LocalDate;
import java.util.List;


@Repository
public interface PrenotazioneRepository extends JpaRepository<Prenotazione,Long> {
    
   List<Prenotazione> findByUtente(Utente utente);
   Prenotazione findByPostazioneAndData(Postazione postazione, LocalDate data);
 
    List<Prenotazione> findByData(LocalDate data);

   List<Prenotazione> findByUtenteUsername(String username);   

    boolean existsByPostazioneAndData(Postazione postazione, LocalDate data);
   
}
