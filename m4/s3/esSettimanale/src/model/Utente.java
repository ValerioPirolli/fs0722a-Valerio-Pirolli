package model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.xml.crypto.Data;

@Entity
@Table(name = "Utente")
public class Utente {
	@Id
	@SequenceGenerator(name = "numeroTessera", sequenceName = "numeroTessera", allocationSize = 1)
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "numeroTessera")
	private Long numeroTessera;
	private String nome;
	private String cognome;
	private Date dataNascita;
	
	@OneToMany(mappedBy = "utente", fetch= FetchType.EAGER)
    private List<Prestito> prestiti;
	
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public Date getDataNascita() {
		return dataNascita;
	}
	public void setDataNascita(Date dataNascita) {
		this.dataNascita = dataNascita;
	}
	public Long getNumeroTessera() {
		return numeroTessera;
	}
	public List<Prestito> getPrestiti() {
		return prestiti;
	}
	public void setPrestiti(List<Prestito> prestiti) {
		this.prestiti = prestiti;
	}
	
}
