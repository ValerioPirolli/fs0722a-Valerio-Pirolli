package model;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Prestito {
	
	@Id
    @GeneratedValue
    private Long id;
    
	@ManyToOne
	@JoinColumn(name = "utente_id")
	private Utente utente_id;	
	@OneToOne
    @JoinColumn(name = "catalogo_isbn")
    private Catalogo elementoprestato;
	
	private Date dataInizioPrestito;
	private Date dataRestituzionePrevista;
	private Date dataRestituzioneEffettiva;
	
	 
	public Prestito() {
		super();
		// TODO Auto-generated constructor stub
	}
	public void setScadenza() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(dataInizioPrestito);
        cal.add(Calendar.DATE, 30);
        dataRestituzionePrevista = cal.getTime();
    }
	public Utente getUtente() {
		return utente_id;
	}
	public Catalogo getElementoPrestato() {
		return elementoprestato;
	}
	public Date getDataInizioPrestito() {
		return dataInizioPrestito;
	}
	public Date getDataRestituzionePrevista() {
		return dataRestituzionePrevista;
	}
	public Date getDataRestituzioneEffettiva() {
		return dataRestituzioneEffettiva;
	}
	public void setUtente(Utente utente) {
		this.utente_id = utente;
	}
	public void setElementoPrestato(Catalogo el) {
		this.elementoprestato = el;
	}
	public void setDataInizioPrestito(Date dataInizioPrestito) {
		this.dataInizioPrestito = dataInizioPrestito;
	}
	public void setDataRestituzionePrevista(Date dataRestituzionePrevista) {
		this.dataRestituzionePrevista = dataRestituzionePrevista;
	}
	public void setDataRestituzioneEffettiva(Date dataRestituzioneEffettiva) {
		this.dataRestituzioneEffettiva = dataRestituzioneEffettiva;
	}
	
	

}