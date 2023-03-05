package com.gestioneprenotazioni.gestioneprenotazioni.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Postazione;
import com.gestioneprenotazioni.gestioneprenotazioni.model.TipoPostazione;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Utente;


@Repository
public interface PostazioneRepository extends JpaRepository<Postazione,Long> {
    
    List<Postazione> findByTipoAndEdificioCitta(TipoPostazione tipo, String citta);
  
    List<Postazione> findByEdificioCitta(String citta);

    Postazione findByCodice(String codice);
    
    boolean existsByCodice(String codice);
   
    
}
