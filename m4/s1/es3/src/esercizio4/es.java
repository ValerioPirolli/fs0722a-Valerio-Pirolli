package esercizio4;

import java.util.Scanner;

public class es {
	
	static Scanner s= new Scanner(System.in);

	public static void main(String[] args) {
		
		countdown();
	}
	public static void countdown(){
		System.out.println("scrivi un numero: ");
		int num = s.nextInt();
		for(int n = num; n >= 0; n--) {			
		System.out.println(n);
		}
		
	}

}
