package model;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Riviste")
public class Riviste extends Catalogo {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Periodicita periodicita;
	public Periodicita getPeriodicita() {
		return periodicita;
	}
	public void setPeriodicita(Periodicita periodicita) {
		this.periodicita = periodicita;
	}
	@Override
	public String toString() {
		return "Riviste [periodicita=" + periodicita + ", toString()=" + super.toString() + "]";
	}
	
	
	




}