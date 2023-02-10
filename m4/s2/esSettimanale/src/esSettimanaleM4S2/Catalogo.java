package esSettimanaleM4S2;

import java.time.LocalDate;

public abstract class Catalogo {
	private static int Contatore = 0;
	private String a = "000" + Contatore;
	private String codiceISBN;
	private String titolo;
	private LocalDate annoPubblicazione;
	private int nPagine;
	public Catalogo(String titolo, LocalDate annoPubblicazione, int nPagine) {
		Contatore++;
		this.codiceISBN = a;
		this.titolo = titolo;
		this.annoPubblicazione = annoPubblicazione;
		this.nPagine = nPagine;
	}
	public String getCodiceISBN() {
		return codiceISBN;
	}
	public String getTitolo() {
		return titolo;
	}
	public LocalDate getAnnoPubblicazione() {
		return annoPubblicazione;
	}
	public int getnPagine() {
		return nPagine;
	}
	@Override
	public String toString() {
		return "[codiceISBN=" + codiceISBN + ", titolo=" + titolo + ", annoPubblicazione=" + annoPubblicazione
				+ ", nPagine=" + nPagine;
	}
	
}
