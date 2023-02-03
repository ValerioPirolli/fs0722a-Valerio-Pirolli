package es4;


public class Dipendente {
	private static double stipendioBase = 1000.00;
	private  int matricola;
	private double importoOrarioStraordinario;
	private Livello livello;
	private Dipartimento dipartimento;
	private double stipendio;
	
	
	public Dipendente( int matricola, double importoOrarioStraordinario, Livello livello,
			Dipartimento dipartimento) {
		this.matricola = matricola;
		this.importoOrarioStraordinario = importoOrarioStraordinario;
		this.livello = livello;
		this.dipartimento = dipartimento;
		this.stipendio = getStipendio();
	}

	public Dipendente(int matricola, Dipartimento dipartimento) {
		this.livello= Livello.OPERAIO;
		this.importoOrarioStraordinario = 30;
		this.matricola = matricola;
		this.dipartimento = dipartimento;
		this.stipendio = stipendioBase;
	}
	
	public void stampaDatiDipendente() {
		System.out.println("stipendio: " + this.stipendio + " matricola: " + this.matricola + " importo: " +this.importoOrarioStraordinario + " livello: " + this.livello + " dipartimento: " + this.dipartimento);
	}
	public void promuovi() {
		if(this.livello == Livello.OPERAIO){
			this.livello = Livello.IMPIEGATO;
			this.stipendio = stipendioBase * 1.2;
		}else if(this.livello == Livello.IMPIEGATO) {
			this.livello = Livello.QUADRO;
			this.stipendio = stipendioBase * 1.5;
		}else if(this.livello == Livello.QUADRO){
			this.livello = Livello.DIRIGENTE;
			this.stipendio = stipendioBase * 2;
		}
	}
	
	
	public double getStipendioBase() {
		return stipendio;
	}
	private double getStipendio() {
		if(this.livello == Livello.OPERAIO){
			return stipendioBase;
		}else if(this.livello == Livello.IMPIEGATO) {
			return stipendioBase * 1.2;
		}else if(this.livello == Livello.QUADRO){
			return stipendioBase * 1.5;
		}else if(this.livello == Livello.DIRIGENTE){
			return stipendioBase * 2;
		}
		return importoOrarioStraordinario;
	}
	public int getMatricola() {
		return matricola;
	}
	public double getImportoOrarioStraordinario() {
		return importoOrarioStraordinario;
	}
	public void setImportoOrarioStraordinario(double importoOrarioStraordinario) {
		this.importoOrarioStraordinario = importoOrarioStraordinario;
	}
	public Livello getLivello() {
		return livello;
	}
	public Dipartimento getDipartimento() {
		return dipartimento;
	}
	public void setDipartimento(Dipartimento dipartimento) {
		this.dipartimento = dipartimento;
	}
	

}
