package progetto;

public class Immagine extends ElementoMultimediale{
	
	public Immagine(String title, int luminosita) {
		super(title, luminosita);
		// TODO Auto-generated constructor stub
	}
	//-------------------------------------------methods ---------------------------------------------------
	public void show() {
		System.out.println("Carico immagine...");
		System.out.println("titolo: " + getTitle());
			  System.out.println(getLuminositaToString());
		System.out.println("FINE");
	}
	public int aumentaLuminosita() {
		return luminosita++;
	}
	@Override
	public int diminuisciLuminosita() {
	 return this.luminosita--;
	}
	public String getLuminositaToString() {
		String l = "*".repeat(luminosita);
		return l;
	}
	//-------------------------------------------get and set ---------------------------------------------------

	public int getLuminosita() {
		return luminosita;
	}

	public void setLuminosita(int luminosita) {
		this.luminosita = luminosita;
	}
	
}
