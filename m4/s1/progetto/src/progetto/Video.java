package progetto;

public class Video extends ElementoMultimediale{


	public Video(String title, int luminosita, int volume, int durata) {
		super(title, luminosita, volume, durata);
		// TODO Auto-generated constructor stub
	}

	//-------------------------------------------methods ---------------------------------------------------
	public void play() {
		System.out.println("Carico video...");
		System.out.println("Titolo: " + getTitle());

		for (int i = 0; i < durata; i++) {
			  System.out.println(getVolumeToString() + " " + getLuminositaToString());
			}
		System.out.println("FINE");
	}

	//-------------------------------------------get and set ---------------------------------------------------

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
