package java_pack;

public class rettangolo {
	int lato;
	int altezza;
	public rettangolo(int lato, int altezza) {
		this.lato = lato;
		this.altezza = altezza;
	}
    public String stampaRettangolo() {
        return "l'area del rettangolo è: " + lato * altezza + " il prerimetro del rettangolo è: " +(lato + altezza) * 2;
    }
    public String stampaDueRettangoli(rettangolo r) {
        return "l'area dei rettangoli è: " + ((lato * altezza) + (r.lato * r.altezza)) + " il prerimetro dei rettangoli è: " +(((lato + altezza) * 2) + ((r.lato + r.altezza) * 2));
    }
    
}
