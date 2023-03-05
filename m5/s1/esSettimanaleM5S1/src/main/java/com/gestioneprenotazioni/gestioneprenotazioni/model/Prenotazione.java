package com.gestioneprenotazioni.gestioneprenotazioni.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Prenotazione {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Utente utente;

    @ManyToOne
    private Postazione postazione;

    @ManyToOne
    private Edificio edificio;

    private LocalDate data;
    

    public Prenotazione( Utente utente, Postazione postazione, LocalDate data) {
        this.utente = utente;
        this.postazione = postazione;
        this.data = data;
    }

}
