package esSettimanaleM4S2;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;

public class Main {
	static Scanner s = new Scanner(System.in);
	static File file = new File("dirFile/test.txt");
	public static void main(String[] args) throws IOException { 
		List<Catalogo> catalogo = new ArrayList<Catalogo>();
		
		Libri libro1 = new Libri("Harry Potter1", LocalDate.of(1990, 9, 11), 300, "J.K. Rowling", Genere.FANTASIA);
		Libri libro2 = new Libri("Harry Potter4", LocalDate.of(2000, 4, 18), 350, "J.K. Rowling", Genere.FANTASIA);
		Libri libro3 = new Libri("Grande Gatsby", LocalDate.of(1925, 4, 10), 250, "Fitzgerald", Genere.DRAMMATICO);
		Libri libro4 = new Libri("Se questo è un uomo", LocalDate.of(1947, 1, 15), 150, "Primo Levi", Genere.DRAMMATICO);
		Libri libro5 = new Libri("Moby Dick", LocalDate.of(1910, 8, 11), 350, "Herman Melville", Genere.THRILLER);
		Libri libro6 = new Libri("Arancia meccanica", LocalDate.of(1973, 4, 23), 375, " Anthony Burgess", Genere.HORROR);
		Libri libro7 = new Libri("It ", LocalDate.of(1959, 7, 25), 220, "Stephen King", Genere.HORROR);
		Libri libro8 = new Libri("Frankenstein ", LocalDate.of(1487, 6, 5), 520, "Primo Levi", Genere.FANTASIA);
		Libri libro9 = new Libri("Il Signore degli Anelli", LocalDate.of(1980, 2, 17), 400, "Tolkien", Genere.FANTASIA);
		Libri libro10 = new Libri("La fabbrica di cioccolato", LocalDate.of(1931, 5, 1), 100, "Roald Dahl", Genere.UMORISTICO);
		Riviste rivista1 = new Riviste("Il Giornale", LocalDate.of(2022, 2, 7), 40, Periodicita.MENSILE);
		Riviste rivista2 = new Riviste("Il Tempo", LocalDate.of(2021, 5, 19), 45, Periodicita.SEMESTRALE);
		Riviste rivista3 = new Riviste("Motori", LocalDate.of(2019, 1, 20), 25, Periodicita.MENSILE);
		Riviste rivista4 = new Riviste("Cose Da Donne", LocalDate.of(2015, 11, 29), 1125, Periodicita.SETTIMANALE);
		Riviste rivista5 = new Riviste("CALCIO!", LocalDate.of(2016, 1, 1), 254, Periodicita.SETTIMANALE);

		catalogo.add(libro1);
		catalogo.add(libro2);
		catalogo.add(libro3);
		catalogo.add(libro4);
		catalogo.add(libro5);
		catalogo.add(libro6);
		catalogo.add(libro7);
		catalogo.add(libro8);
		catalogo.add(libro9);
		catalogo.add(libro10);
		catalogo.add(rivista1);
		catalogo.add(rivista2);
		catalogo.add(rivista3);
		catalogo.add(rivista4);
		catalogo.add(rivista5);
		cancellaFile();
		stampaFile(removeItem(catalogo, "0003"));
		scriviFile("Cercato con il codice ISBN");
		stampaFile(searchISBN(catalogo, "0003")); 
		scriviFile("Cercato con l'anno");
		stampaFile(searchYear(catalogo, 1980));
		scriviFile("Cercato con l'autore");
		stampaFile(searchAuthor(catalogo, "J.K. Rowling"));
		leggiFile();
	}
	
	
	public static Stream<Catalogo> removeItem(List<Catalogo> cat, String s){
	        return cat.stream().filter(c -> !c.getCodiceISBN().equals(s));
	}
	


	public static Stream<Catalogo> searchISBN(List<Catalogo> cat, String s) {

		return cat.stream().filter(c -> c.getCodiceISBN().equals(s));

    }
	
	public static Stream<Catalogo> searchYear(List<Catalogo> cat, int n) {

		return cat.stream().filter(c -> c.getAnnoPubblicazione().getYear() == n);
	}
	
	public static Stream<Catalogo> searchAuthor(List<Catalogo> cat, String s) {
		return cat.stream().filter(c -> c instanceof Libri && ((Libri)c).getAutore().equals(s));
	}
	
	//metodi per scrivere sul file
	public static void stampaFile(Stream<Catalogo> cat) throws IOException {
		List<Catalogo> catalogoList = cat.collect(Collectors.toList());
		for (Catalogo c : catalogoList) {
			try {
				scriviFile(c.toString());
			} catch (IOException e) {
				System.out.println("Errore durante la scrittura del file: " + e.getMessage());
			}
		}
	}
	public static void scriviFile(String testo) throws IOException {
		FileUtils.writeStringToFile(file, testo + "\n", "UTF-8", true);
	}
	
	public static String leggiFile() throws IOException {
		String txtFile = FileUtils.readFileToString(file, "UTF-8");
		System.out.println(txtFile);
		return txtFile;
	}
	public static void cancellaFile() {
		FileUtils.deleteQuietly(file);
	}
	
}
