package progetto;

public class Audio extends ElementoMultimediale{
	
	
	//-------------------------------------------methods ---------------------------------------------------
	
	public Audio(String title, int volume, int durata) {
		super(title, volume, durata);
		// TODO Auto-generated constructor stub
	}
	@Override
	public void play() {
		System.out.println("Carico audio...");
		System.out.println(" Titolo: " + getTitle());
		for (int i = 0; i < durata; i++) {
			  System.out.println(getVolumeToString());
			}
		System.out.println("FINE");
	}
	public int alzaVolume() {
		return volume++;
	}
	public int abbassaVolume() {
		return volume--;
	}
	
	public String getVolumeToString() {
		String s = "!".repeat(volume);
		return s;
	}
	
	//-------------------------------------------get and set ---------------------------------------------------
	
	public int getVolume() {
		return volume;
	}


	public int getDurata() {
		return durata;
	}

	public void setDurata(int durata) {
		this.durata = durata;
	}
	
}
