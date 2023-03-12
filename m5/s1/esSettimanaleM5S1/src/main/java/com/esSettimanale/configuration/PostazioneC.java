package com.esSettimanale.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.esSettimanale.model.Postazione;


@Configuration
public class PostazioneC {
    

    @Bean
    @Scope("prototype")
     Postazione postazione() {
        return new Postazione();
    }

}