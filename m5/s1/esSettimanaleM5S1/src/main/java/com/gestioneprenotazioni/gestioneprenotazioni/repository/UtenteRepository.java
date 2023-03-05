package com.gestioneprenotazioni.gestioneprenotazioni.repository;


import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Utente;

import java.util.List;


@Repository
public interface UtenteRepository extends JpaRepository<Utente, Long> {
    
    Utente findByUsername(String username);

    List<Utente> findByNomeCompletoContainingIgnoreCase(String nomeCompleto);

}
