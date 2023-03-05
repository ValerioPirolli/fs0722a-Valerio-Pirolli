package com.gestioneprenotazioni.gestioneprenotazioni.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Edificio;

import java.util.List;

@Repository
public interface EdificioRepository extends JpaRepository<Edificio,Long> {
    
      
    Edificio findByNome(String nome);

    List<Edificio> findByCitta(String citta);
   

}
