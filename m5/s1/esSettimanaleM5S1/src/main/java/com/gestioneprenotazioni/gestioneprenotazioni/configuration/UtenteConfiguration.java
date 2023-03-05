package com.gestioneprenotazioni.gestioneprenotazioni.configuration;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Prenotazione;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Utente;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;

public class UtenteConfiguration {
    
        @Bean
        @Scope("prototype")
        public Utente utente() {
            return new Utente();
        }
    
    

}
