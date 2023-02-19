package model;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Libri")
public class Libri extends Catalogo{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String autore;
    private String genere;

	
	  public Libri() {
		super();
		// TODO Auto-generated constructor stub
	}


	

		public String getAutore() {
		return autore;
	}


	public void setAutore(String autore) {
		this.autore = autore;
	}


	public String getGenere() {
		return genere;
	}


	public void setGenere(String genere) {
		this.genere = genere;
	}


		@Override
		public String toString() {
			return "Libri [autore=" + autore + ", genere=" + genere + ", toString()=" + super.toString() + "]";
		}
	    
	    


		
	    
}
