package esercizio3;

import java.util.Scanner;

public class es {

	static Scanner scanner= new Scanner(System.in);
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		dividiStringa();
	}

		public static void dividiStringa() {
			String s="";
			while(!s.equals(":q")){
				System.out.println("inserisci stringa");
				s= scanner.nextLine();			
				if(!s.equals(":q")){			
				for(int i=0;i<s.length();i++) {
					System.out.println(s.charAt(i));
					}
				}
			}		
			System.out.println("Fine");
		}
	}
