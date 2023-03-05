package com.gestioneprenotazioni.gestioneprenotazioni.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Prenotazione;

//import com.gestioneprenotazioni.gestioneprenotazioni.model.Prenotazione;;

@Configuration
public class PrenotazioneConfiguration {
    
    @Bean
    @Scope("prototype")
    public Prenotazione  prenotazioneTest(){
        return new Prenotazione();
    }

}
