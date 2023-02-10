package esSettimanaleM4S2;

import java.time.LocalDate;

public class Riviste extends Catalogo{
	Periodicita periodicita;

	public Riviste(String titolo, LocalDate annoPubblicazione, int nPagine, Periodicita periodicita) {
		super(titolo, annoPubblicazione, nPagine);
		this.periodicita = periodicita;
	}

	public Periodicita getPeriodicita() {
		return periodicita;
	}

	@Override
	public String toString() {
		return "Rivista " + super.toString() + "periodicita=" + periodicita + "]";
	}
	
}
