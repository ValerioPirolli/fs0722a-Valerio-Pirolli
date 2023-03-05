package com.gestioneprenotazioni.gestioneprenotazioni.service;


import org.springframework.beans.factory.annotation.Autowired;

import com.gestioneprenotazioni.gestioneprenotazioni.repository.EdificioRepository;
import com.gestioneprenotazioni.gestioneprenotazioni.model.Edificio;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class EdificioService {
    
@Autowired 
private EdificioRepository edificioRepository;

	public Edificio init(Edificio edificio) {
		return edificioRepository.save(edificio);
	}

	public Edificio init(String nome,String indirizzo, String citta) {
		Edificio edificio = new Edificio(nome,indirizzo,citta);
		return edificioRepository.save(edificio);
	}

	public void delete(Edificio edificio) {
		edificioRepository.delete(edificio);
	}

	public Edificio findById(Long id) {
		return edificioRepository.findById(id).get();
	}

	public void update(Edificio edificio) {
		edificioRepository.save(edificio);
	}

	public List<Edificio> getAll(){
		return (List<Edificio>) edificioRepository.findAll();
	}
}

