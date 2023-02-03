package progetto;

abstract class ElementoMultimediale {
	public String title;
	public int luminosita;
	public int volume;
	public int durata;
	
	public ElementoMultimediale(String title, int luminosita, int volume, int durata) {
		super();
		this.title = title;
		this.luminosita = luminosita;
		this.volume = volume;
		this.durata = durata;
	}

	public ElementoMultimediale(String title, int luminosita) {
		super();
		this.title = title;
		this.luminosita = luminosita;
	}

	public ElementoMultimediale(String title, int volume, int durata) {
		super();
		this.title = title;
		this.volume = volume;
		this.durata = durata;
	}
	//-------------------------------------------methods ---------------------------------------------------
	public void play() {
		System.out.println("INIZIO");
		for (int i = 0; i < durata; i++) {
			  System.out.println("durata:"+ i +" Titolo: " + getTitle() +" "+ getVolumeToString() + " " + getLuminositaToString());
			}
		System.out.println("FINE");
	}
	public void show() {
		System.out.println("INIZIO");
			  System.out.println("titolo: " + getTitle() + "" +getLuminositaToString());
		System.out.println("FINE");
	}
	
	public int alzaVolume() {
		return volume++;
	}
	public int abbassaVolume() {
		return volume--;
	}
	public int aumentaLuminosita() {
		return luminosita++;
	}
	public int diminuisciLuminosita() {
		return this.luminosita--;
	}
	public String getVolumeToString() {
		String s = "!".repeat(volume);
		return s;
	}
	public String getLuminositaToString() {
		String l = "*".repeat(luminosita);
		return l;
	}
	//-------------------------------------------get and set ---------------------------------------------------
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getLuminosita() {
		return luminosita;
	}

	public void setLuminosita(int luminosita) {
		this.luminosita = luminosita;
	}

	public int getVolume() {
		return volume;
	}

	public void setVolume(int volume) {
		this.volume = volume;
	}

	public int getDurata() {
		return durata;
	}

	public void setDurata(int durata) {
		this.durata = durata;
	}
	


	
}
