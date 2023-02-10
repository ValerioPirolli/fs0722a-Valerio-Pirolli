package l2S2es2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class MainProject {

    static Scanner scanner = new Scanner (System.in);

    public static void main(String[] args) {


        //instanziaLista();
        //lista1Random2(instanziaLista());
        parioDispari(instanziaLista());
    }

    public static List<Integer> instanziaLista(){
        System.out.print("Inserisci numero di numeri interi casuali da creare- ");
        int n= Integer.parseInt(scanner.nextLine());
        List<Integer> listaNumeri= new ArrayList<Integer>();
        for(int i=0;i<n;i++) {
            listaNumeri.add((int) (Math.random()*99+1));
        }
        Object[] listaOrdinata= new Object[listaNumeri.size()];
        listaOrdinata= listaNumeri.toArray();
        System.out.println(Arrays.toString(listaOrdinata));
        return listaNumeri;

    }

    public static List<Integer> lista1Random2(List<Integer>arr){
        ArrayList<Integer> arr2= new ArrayList<Integer>();
        arr2.addAll(arr);
        ArrayList<Integer> arr1Sorted= new ArrayList<Integer>();
        arr1Sorted.addAll(arr);
        Collections.shuffle(arr1Sorted);
        arr2.addAll(arr1Sorted);
        System.out.println(Arrays.toString(arr2.toArray()));
        return arr2;

    }
    public static void parioDispari(List<Integer> arr){
        System.out.print("Stampa valori pari -> Pari / Stampa valori dispari -> Dispari: ");
        String y2=scanner.nextLine();
        boolean y = false;
        if(y2.equals("Pari") ||  y2.equals("pari") ||  y2.equals("p")) {
            y=true;
        }else if(y2.equals("Dispari") || y2.equals("dispari") ||  y2.equals("d")) {
            y=false;
        }
        if(y) {
            List<Integer> pari= new ArrayList<Integer>();
            for(Integer x : arr ) {
                if( x%2==0) {
                    pari.add(x);
                }
            }
            System.out.println(Arrays.toString(pari.toArray()));
        }else {
            List<Integer> dispari= new ArrayList<Integer>();
            for(Integer x : arr ) {
                if( x%2!=0) {
                    dispari.add(x);
                }
            }
            System.out.println(Arrays.toString(dispari.toArray()));
        }
    }
}