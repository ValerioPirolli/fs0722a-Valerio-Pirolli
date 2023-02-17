package model;


import java.util.Date; 

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Catalogo")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Catalogo{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_catalogo")
	private Long id;
	private String titolo;
	private Date annoPubblicazione;
	private int nPagine;
	@OneToOne(mappedBy = "ElementoPrestato")
	private Prestito prestito;
	
	public Long getId() {
		return id;
	}
	public String getTitolo() {
		return titolo;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public Date getAnnoPubblicazione() {
		return annoPubblicazione;
	}
	public void setAnnoPubblicazione(Date annoPubblicazione) {
		this.annoPubblicazione = annoPubblicazione;
	}
	public int getnPagine() {
		return nPagine;
	}
	public void setnPagine(int nPagine) {
		this.nPagine = nPagine;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	@Override
	public String toString() {
		return "Catalogo [id=" + id + ", titolo=" + titolo + ", annoPubblicazione=" + annoPubblicazione + ", nPagine="
				+ nPagine + "]";
	}
	
}
