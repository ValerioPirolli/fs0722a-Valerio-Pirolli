package l2S2es1;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class MainProject {

	static Scanner scanner = new Scanner (System.in);

    public static void main(String[] args) {



        stampaDuplicati(caricaSet(richiestaeInserimento()));

    }

    public static int richiestaeInserimento() {
        System.out.println("Inserisci numero di parole da inserire- ");
        int nPar=Integer.parseInt(scanner.nextLine());
        return nPar;
    }

    public static Set<String> caricaSet(int n) {
        Set<String> setStringhe= new HashSet<String>();
        for(int i=0;i<n;i++) {
            System.out.println("Inserisci parola "+(i+1)+" : ");
            String s=scanner.nextLine();
            if(setStringhe.contains(s)) {
                System.out.println("Parola già presente: "+s);
                i--;
            }
            setStringhe.add(s);
        }
        return setStringhe;
    }

    public static void stampaDuplicati(Set<String> x) {
        System.out.println("Elenco parole inserite diverse: ");
            System.out.println(x.size());
            System.out.println(x.toString());
    }

}