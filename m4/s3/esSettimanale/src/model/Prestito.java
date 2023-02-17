package model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name= "Prestito")
public class Prestito {
	
	@Id
	@Column(name = "id_Prestito")
	private Long id;
	@ManyToOne
	private Utente utente;
	
	@OneToOne
	@JoinColumn(referencedColumnName = "id_Catalogo")
	private Catalogo ElementoPrestato;
	
	private Date inizoPrestito;
	private Date restituzionePrevista;
	private Date restituzioneEffettiva;
	public Utente getUtente() {
		return utente;
	}
	public void setUtente(Utente utente) {
		this.utente = utente;
	}
	public Catalogo getElementoPrestato() {
		return ElementoPrestato;
	}
	public void setElementoPrestato(Catalogo elementoPrestato) {
		ElementoPrestato = elementoPrestato;
	}
	public Date getInizoPrestito() {
		return inizoPrestito;
	}
	public void setInizoPrestito(Date inizoPrestito) {
		this.inizoPrestito = inizoPrestito;
	}
	public Date getRestituzionePrevista() {
		return restituzionePrevista;
	}
	public void setRestituzionePrevista(Date restituzionePrevista) {
		this.restituzionePrevista = restituzionePrevista;
	}
	public Date getRestituzioneEffettiva() {
		return restituzioneEffettiva;
	}
	public void setRestituzioneEffettiva(Date restituzioneEffettiva) {
		this.restituzioneEffettiva = restituzioneEffettiva;
	}
	public Long getId() {
		return id;
	}
	
	
	
	
}
