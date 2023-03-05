package com.gestioneprenotazioni.gestioneprenotazioni.runner;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;

import com.gestioneprenotazioni.gestioneprenotazioni.model.*;

import com.gestioneprenotazioni.gestioneprenotazioni.service.UtenteService;
import com.gestioneprenotazioni.gestioneprenotazioni.service.PostazioneService;
import com.gestioneprenotazioni.gestioneprenotazioni.service.PrenotazioneService;
import com.gestioneprenotazioni.gestioneprenotazioni.model.TipoPostazione;
import com.gestioneprenotazioni.gestioneprenotazioni.service.EdificioService;

import org.springframework.stereotype.Component;

@Component
public class Runner1 implements ApplicationRunner{
    
        @Autowired 
        private PostazioneService postazioneService;
        
	    @Autowired 
        private EdificioService edificioService;

	    @Autowired 
        private UtenteService utenteService;

	    @Autowired 
        private PrenotazioneService prenotazioneService;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        System.out.println("runner...");


           // setup per la classe Utente
           Utente utente1 = utenteService.init("superM","Mario Rossi","ma@rio,rossi");

           // setup per la classe Edificio
           Edificio edificio1 = edificioService.init("Palazzo Rossi","V. p. rossi 12","Uganda");
   
           // setup per la classe Postazione
            Postazione postazione1 = postazioneService.init("abc123","postazione palazzo Rossi",TipoPostazione.PRIVATO,500,edificio1);
   
           // setup per la classe Prenotazione
           Prenotazione prenotazione1 = prenotazioneService.init(postazione1,LocalDate.now(),utente1);
       }

    }

