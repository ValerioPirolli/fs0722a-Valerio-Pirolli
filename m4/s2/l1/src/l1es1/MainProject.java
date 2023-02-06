package l1es1;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class MainProject {
	static Scanner scanner = new Scanner (System.in);
	static int[] arr = new int[5];

	public static void main(String[] args) {
		Random rand = new Random();
		System.out.print("Array: ");
		for(int i = 0; i < 5; i++) {
			arr[i]= rand.nextInt((9 - 0) + 1) + 0;
		}
		System.out.print(Arrays.toString(arr));
		System.out.println("");
		System.out.println("vuoi cambiare un numero? si | no");
		String a = scanner.nextLine();
		
		if(a.equals("si") || a.equals("y")) {
			prova();
		}else {
			scanner.close();
		}
		
    }
	public static void prova(){

		do {
            try {
                System.out.println("quale numero vuoi cambiare? (index)");
                int x = Integer.parseInt(scanner.nextLine());
                switched(x);
                }
                catch(NumberFormatException a) {
                System.out.println("si possono scrivere solo numeri interi");
                continue;
            }finally {
                System.out.println(" ");

            }
            
            break;
        } while (true);
	}
	public static void switched(int r){
		switch(r - 1) {
		 case -1:
			 System.out.println("adios");
			  break;
		  case 0:
			  cambio(0);
		  case 1:
			  cambio(1);
		    break;
		  case 2:
			  cambio(2);
		    break;
		  case 3:
			  cambio(3);
		    break;
		  case 4:
			  cambio(4);
		    break;
		  default:
		    System.out.println("indice troppo elevato!!");
		    prova();
		    break;
		}
	}
	
	public static void cambio(int r){
		do {
			try {
			  System.out.print("vuoi cambiare il numero: " + arr[r] + "?");
			  String b = scanner.nextLine();
				if(b.equals("si") || b.equals("y")) {
			            try {
			                System.out.print("che numero vuoi inserire?");
			                int c = Integer.parseInt(scanner.nextLine());
			                arr[r] = c;
			                

			            }catch(NumberFormatException a) {
			                System.out.println("si possono scrivere solo numeri interi");
			                continue;
			            }finally{
			            	System.out.println("vuoi cambiare altro? si | no");
			        		System.out.println(Arrays.toString(arr));
			        		String c = scanner.nextLine();
			        		if(c.equals("si") || c.equals("y")) {
			        			prova();
			        		}else {
			        			scanner.close();
			        			break;
			        		}
			            }
			            break;
			        
				}else{
					prova();
				}
			}catch(Exception e) {
				
			}
		} while (true);
	}
}