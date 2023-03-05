package com.gestioneprenotazioni.gestioneprenotazioni.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Postazione;

@Configuration
public class PostazioneConfiguration {
    

    @Bean
    @Scope("prototype")
    public Postazione postazione() {
        return new Postazione();
    }

}
