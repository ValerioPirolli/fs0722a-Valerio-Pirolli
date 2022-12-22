/*
Il type system è di tipo strutturale (Structural type system). 
Il compiler quando fa il controllo / la comparazione dei tipi di dato si basa sulla struttura / forma.
*/
function inviaMessaggio(msg: {email:string, messaggio:string}) { 
    // il parametro indica che viene accettato un oggetto che ha almeno le proprietà email e messaggio
    mailSender.sendTo(msg.email, msg.messaggio);
    // al netto che non creo un oggetto mailSender
    var mioMesssaggio = {email:"mario.rossi@epicode.it", messaggio:"Buongiorno!"}
    inviaMessaggio(mioMesssaggio);  // questa chiamata è corretta perché ci sono i parametri attesi

    var mioMesssaggio = { messaggio:"Buongiorno!"}
    inviaMessaggio(mioMesssaggio); 
    // questa chiamata genera un errore perché quando compilo l'oggetto non contiene la proprietà email
}
    // -> una volta che dichiariamo una struttura per il parametro della funzione ts verifica che 
    // effettivamente venga passato un oggetto con quella struttura
    // -> TypeScript consente la definizione di una interfaccia che definisce la struttura del nostro parametro
    interface Messaggio {
        email: string;
        messaggio: string;
    }   // interface consente di definire il tipo di dato (messaggio nel nostro caso), TypeScript quando compila verifica la struttura
        // in questo modo poi potremo utilizzare Messaggio come se fosse un tipo di dato predefinito (ad per riusarlo nella nostra app)
    function inviaMessaggio (msg:Messaggio) {
        mailSender.sendTo(msg.email, msg.messaggio);
    }
    // la struttura dichiarata dall'interfaccia rappresenta gli elementi minimi che un oggetto deve avere
    var mioMesssaggio = {
        email: "mario.rossi@epicode.it",
        messaggio: "Buongiorno!",
        data: new Date()
    };  // il fatto che la proprietà data non è prevista non pregiudica la compatibilità dell'oggetto col tipo previsto
    inviaMessaggio(mioMesssaggio);
    // -> possiamo dentro Interface definire una struttura con degli elementi opzionali
    interface Messaggio {
        email:string;
        nomeDestinatario?: string;  // elementi opzionali -> sono accettati se sono presenti, ma non dà errore se sono assenti
        oggetto?: string; // elementi opzionali -> sono accettati se sono presenti, ma non dà errore se sono assenti
        messaggio: string
    }

    // le interfacce non descrivono solo oggetti ma anche altri elementi del linguaggio
    // ad esempio definisco una funzione numerica che opera su valori numerici
    interface FunzioneSuNumeri {
        (x:number, y:number):number // prendo due valori numerici come parametro e restituisco un numero
    }
    // faccio una funzione del tipo appena dichiarato
    var somma: FunzioneSuNumeri;
    somma = function(a:number, b:number) {  // dichiarare il tipo non ci obbliga a usare gli stessi nomi dei parametri
        return a + b;                       // l'unica cosa importante è che i tipi dei paramentri siano corrispondenti
    }

    // possiamo anche dichiarare delle interfacce che descrivono degli array
    interface ArrayDiStringhe {
        [index:number]: string  // definisco il tipo dell'indice (number) e il tipo di ciascun elemento (string)
    }
    var x: ArrayDiStringhe = ["uno", "due", "tre"];
    
    // per l'indice dell'array oltre al tipo number è previsto anche il tipo string
    interface Dizionario {
        [index:string]: string
    } 
    var x: Dizionario;
    x["chiave1"] = "valore1";
    x["chiave2"] = "valore2";
    // per l'indice i tipi di dati possibili sono solo number e string, per gli elementi dell'array possiamo usare qualsiasi tipo
    // esempio: array di oggetti
    interface ArrayDiOggetti {
        [index:number]: {id:number, label:string}
    }
    var x: ArrayDiOggetti = [
        {id:1, label:"aaa"},
        {id:2, label:"bbb"}
    ];