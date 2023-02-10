package esSettimanaleM4S2;

import java.time.LocalDate;

public class Libri extends Catalogo{
	private String autore;
	private Genere genere;
	
	public Libri(String titolo, LocalDate annoPubblicazione, int nPagine, String autore, Genere genere) {
		super(titolo, annoPubblicazione, nPagine);
		this.autore = autore;
		this.genere = genere;
	}

	public Genere getGenere() {
		return genere;
	}

	public void setGenere(Genere genere) {
		this.genere = genere;
	}

	public String getAutore() {
		return autore;
	}

	public void setAutore(String autore) {
		this.autore = autore;
	}

	@Override
	public String toString() {
		return "Libro " + super.toString() + " autore=" + autore + ", genere=" + genere + "]";
	}
	
}
