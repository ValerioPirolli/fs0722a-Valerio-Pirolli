package java_pack;

public class telefono {
		int numero;
		int credito = 0;
		int[] chiamate;
		public telefono(int numero) {
			this.numero = numero;
			this.credito = 0;
			this.chiamate[] = {123,123};
		}
		/*public String chiama(int min, int num) {
	        return 
	    }*/
		public String dati(){
			return "Numero di Telefono: " + numero + " credito: " + credito + " ultime 5 chimate: " + chiamate[0];
		}
}
