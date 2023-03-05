package com.gestioneprenotazioni.gestioneprenotazioni.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestioneprenotazioni.gestioneprenotazioni.model.Postazione;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Edificio;
import com.gestioneprenotazioni.gestioneprenotazioni.model.TipoPostazione;
import com.gestioneprenotazioni.gestioneprenotazioni.repository.PostazioneRepository;

@Service
public class PostazioneService {
    
    @Autowired
    private PostazioneRepository postazioneRepository;

    public Postazione init(Postazione postazione) {
		return postazioneRepository.save(postazione);
	}

	public Postazione init(String codice, String descrizione,TipoPostazione tipo, Integer maxOccupanti, Edificio edificio) {
		Postazione postazione = new Postazione(codice,descrizione,tipo,maxOccupanti,edificio);
		return postazioneRepository.save(postazione);
	}

	public void delete(Postazione postazione) {
		postazioneRepository.delete(postazione);
	}

	public Postazione findById(Long id) {
		return postazioneRepository.findById(id).get();
	}

	public void update(Postazione postazione) {
		postazioneRepository.save(postazione);
	}
}
