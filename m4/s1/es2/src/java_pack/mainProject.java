package java_pack;

public class mainProject {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		rettangolo r1 = new rettangolo(10,20);
		rettangolo r2 = new rettangolo(15,33);
		System.out.println("primo rettangolo: " + r1.stampaRettangolo());
		System.out.println("secondo rettangolo: " + r2.stampaRettangolo());
		System.out.println(r1.stampaDueRettangoli(r2));
		
		
		
		telefono t1 = new telefono(1234567, 0);
		System.out.println(t1.dati());
	}

}
