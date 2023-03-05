package com.gestioneprenotazioni.gestioneprenotazioni.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Edificio;

@Configuration
public class EdificioConfiguration {
    

    @Bean
    @Scope("prototype")
    public Edificio edificio() {
        return new Edificio();
    }

}
