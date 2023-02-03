package es4;

public class Banca {

	public static void main(String[] args) {
		Dipendente Giovanni = new Dipendente(2,Dipartimento.PRODUZIONE);
		Dipendente Marco = new Dipendente(1,Dipartimento.PRODUZIONE);
		Dipendente Paolo = new Dipendente(3, 30, Livello.IMPIEGATO, Dipartimento.AMMINISTRAZIONE);
		Dipendente Jeff = new Dipendente(4, 30, Livello.DIRIGENTE, Dipartimento.VENDITE);
		
		Marco.promuovi();
		Paolo.promuovi();
		
		Giovanni.stampaDatiDipendente();
		Marco.stampaDatiDipendente();
		Paolo.stampaDatiDipendente();
		Jeff.stampaDatiDipendente();
		
		calcolaPaga(Giovanni, 5);
		calcolaPaga(Marco, 5);
		calcolaPaga(Paolo, 5);
		calcolaPaga(Jeff, 5);
	}
	public static double calcolaPaga(Dipendente d) {
		System.out.println(d.getStipendioBase());
		return d.getStipendioBase();
	}
	public static double calcolaPaga(Dipendente d, int i) {
		System.out.println(d.getStipendioBase() + d.getImportoOrarioStraordinario() * i);
		return d.getStipendioBase() + d.getImportoOrarioStraordinario() * i;
	}

}
