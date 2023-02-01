package esercizio1;

public class es {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println(stringaPariDispari("ciao"));
		}
		public static boolean stringaPariDispari(String stringa) {
			if((stringa.length()%2==0)) {
				return true;
			}else {
				return false;
			}
		}
	

}
