package model;


import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Utente implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE) //ho provato a mettere IDENTITY ma mi da "could not execute statement" come errore 
	private Long numeroTessera;
	private String nome;
	private String cognome;
	private Date dataDiNascita;
	
	
	@OneToMany(mappedBy = "utente_id")
    private List<Prestito> prestiti = new ArrayList<>();	
	

	public Utente() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getNome() {
		return nome;
	}
	public String getCognome() {
		return cognome;
	}
	public Date getDataDiNascita() {
		return dataDiNascita;
	}
	public Long getNumeroTessera() {
		return numeroTessera;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public void setDataDiNascita(Date dataDiNascita) {
		this.dataDiNascita = dataDiNascita;
	}
	public void setNumeroTessera(Long numeroTessera) {
		this.numeroTessera = numeroTessera;
	}
	@Override
	public String toString() {
		return "Utente [nome=" + nome + ", cognome=" + cognome + ", dataDiNascita=" + dataDiNascita + ", numeroTessera="
				+ numeroTessera + ", prestiti=" + prestiti + "]";
	}
	
	
	
}