package esercizio2;

public class es {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		switched(5);
	}
	public static void switched(int n) {
		switch (n) {
		case 1: {
			System.out.println("uno");
			break;
		}
		case 2: {
			System.out.println("due");
			break;
		}
		case 3: {
			System.out.println("tre");
			break;
		}
		default:
			System.out.println("errore");
		}
	}
}
