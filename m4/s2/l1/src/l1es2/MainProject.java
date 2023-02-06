package l1es2;

import java.util.Scanner;

public class MainProject {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		i();
	}
	public static void i() {
		try (Scanner scanner = new Scanner(System.in)) {
		    do {
		        try {
		            System.out.print("km: ");
		            int x = Integer.parseInt(scanner.nextLine());
		            System.out.print("l: ");
		            int y = Integer.parseInt(scanner.nextLine());
		            int res = x/y;
		            System.out.println(res + " km/l "  );

		        } catch (ArithmeticException e){
		            System.out.println("non si possono inserire dei 0");
		            continue; // go again
		        }catch(NumberFormatException a) {
		            System.out.println("si possono scrivere solo numeri interi");
		            continue;
		        }
		        break;
		    } while (true);
		}
	}

}
