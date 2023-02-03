package progetto;

import java.util.Scanner;

public class mainProject {


	static Scanner scanner = new Scanner(System.in);
	
	public static void main(String[] args) {
		
ElementoMultimediale lettore[]= new ElementoMultimediale[5];		
		
		caricaERiproduciArray(lettore);		
		
	}
	
	static ElementoMultimediale[] caricaERiproduciArray(ElementoMultimediale[] arr) {
		
		int n=0;
		while(n<5) {
		System.out.println("Che tipo di file vuoi inserire?");
		System.out.println("1 per video");
		System.out.println("2 per audio");
		System.out.println("3 per immagine");
		String ris=scanner.nextLine();
		if(ris.equals("1") || ris.equals("2") | ris.equals("3")) {
			arr[n]=op(ris);
			n++;
		}
		}
		System.out.println("Hai inserito tutti i dati!");
		System.out.println("Quale elemento vuoi riprodurre?: ");
		 int a=Integer.parseInt(scanner.nextLine());
		while(a!=0) {
			if(a==1) {
			howToPlay(arr[0]);
			System.out.println("Quale elemento vuoi riprodurre? ");
			 a=Integer.parseInt(scanner.nextLine());
			}else if(a==2) {
				howToPlay(arr[1]);
				System.out.println("Quale elemento vuoi riprodurre? ");
				 a=Integer.parseInt(scanner.nextLine());
			}else if(a==3) {
				howToPlay(arr[2]);
				System.out.println("Quale elemento vuoi riprodurre? ");
				 a=Integer.parseInt(scanner.nextLine());
			}else if(a==4) {
				howToPlay(arr[3]);
				System.out.println("Quale elemento vuoi riprodurre? ");
				 a=Integer.parseInt(scanner.nextLine());
			}else if (a==5) {
				howToPlay(arr[4]);
				System.out.println(" Quale elemento vuoi riprodurre? ");
				 a=Integer.parseInt(scanner.nextLine());
			}else {
				System.out.println("inserire numero valido (1-5)");
				System.out.println("Quale elemento vuoi riprodurre? ");
				 a=Integer.parseInt(scanner.nextLine());
			}
		}
		System.out.println("Fine riproduzione lettore");
		
		
		return arr;
	}
	
	static ElementoMultimediale op(String r) {
		if(r.equals("1")) {
			System.out.println("Video");
			System.out.print("Titolo: ");
			String titolo=scanner.nextLine();
			System.out.print("Durata: ");
			int durata=Integer.parseInt(scanner.nextLine());
			System.out.print("Volume: ");
			int volume=Integer.parseInt(scanner.nextLine());
			System.out.print("Luminosità: ");
			int luminosita=Integer.parseInt(scanner.nextLine());
			
			Video vid= new Video(titolo,durata,volume,luminosita);
			return vid;
		}else if(r.equals("2")) {
			System.out.println("Audio");
			System.out.print("Titolo: ");
			String titolo1=scanner.nextLine();
			System.out.print("Durata: ");
			int durata1=Integer.parseInt(scanner.nextLine());
			System.out.print("Volume: ");
			int volume1=Integer.parseInt(scanner.nextLine());
			
			Audio aud= new Audio(titolo1,durata1,volume1);
			return aud;
		}else if(r.equals("3")) {
			System.out.print("Titolo: ");
			String titolo3=scanner.nextLine();
			System.out.print("Luminosità: ");
			int luminosita2=Integer.parseInt(scanner.nextLine());
			
			Immagine imm= new Immagine(titolo3,luminosita2);
			return imm;
		}else {
			
			System.out.println("Scelta non valida- scelte possibili: 1-video 2-audio 3-immagine");
			return null;
		}
		} public static void howToPlay(ElementoMultimediale e) {
			 if(e instanceof Video || e instanceof Audio) {
		            e.play();
		        }
		        else {
		            ((Immagine)e).show();
		        }
		}
	}