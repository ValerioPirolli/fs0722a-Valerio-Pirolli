/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
{
  let sum = 10+20
  console.log(sum)
}
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
{
  let random = Math.floor(Math.random() * 20)
  console.log(random)
}
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

 let me = {
    name: 'Valerio',
    surname: 'Pirolli',
    age: 21,
  }
  console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skill = ["javascript"];
console.log(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skill.push("nuovo");
console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".*/


me.skill.pop();

// Funzioni


/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.ceil(Math.random() * 6);
}
console.log(dice())
/*  ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/



function whoIsBigger(n1, n2){                                     //funzione
  if(n2 > n1){                                                    //serve a stabilire se n2 è maggiore di n1
    console.log(n2 + ' è maggiore di ' + n1);
  }
  else if(n1 === n2){                                             //serve a stabilire se n1 è uguale a n2
    console.log('sono uguali');
  }
  else 
  console.log(n1 + ' è maggiore di '+ n2 );                       //serve a stabilire se n1 è maggiore di n2
}
whoIsBigger(23, 12131421)                                         //scusa per la logica contorta



/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function slipMe(stringa){                                          //funzione
  let arr = stringa.split(' ')                                     //qui prendo la stringa e la trasformo in una array grazie alle proprietà dello split
console.log(arr)                                                   //(' ') si usa per far capire a split dove dividere la stringa
  }
slipMe('i love coding')

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/


function deleteOne(stringa, boooooleano){                          //funzione
  if(boooooleano === true){                                        //se il valore del booleano è true 
    console.log(stringa.slice(1))                                  // uso la prop di slice e tolgo la prima lettera
  }else
    console.log(stringa.slice(0, stringa.length - 1))              // uso la proprieta di slice e tolgo l'ultima lettera
  }
deleteOne('stringa di prova', true)


/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/


function onlyLetters(stringona){
  let quiNonSonoAmmessiINumeri = stringona.replace(/[0-9]/g, '');  //la variabile parla per se
  console.log(quiNonSonoAmmessiINumeri)
}
onlyLetters('io ho 221233 cani')


/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringadinuovo){
  
}


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(){
  const cheSettimanaE = new Date().getDay();                      //getDay serve per prendere il giorno della settimana domenica è "0" mentre sabato è "6"
  console.log(cheSettimanaE);                                     //faccio il console.log                              
}
whatDayIsIt()



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
                                        //non funziona
function rollTheDices(n) { 
  let objReturned = {
    sum: 0,
    values: []
  };

  for (let i = 0; i < n; i++) { 
    let res = dice();
    objReturned.sum += res;
    objReturned.values[objReturned.values.length] = res;
  }
  return objReturned;
}
rollTheDices(3)*/

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.

                                          //non funziona
function howManyDays(data){

  const date = new Date();

let giorno = date.getDate();
let mese = date.getMonth() + 1;
let anno = date.getFullYear();
let giornoCorrente = `${anno},${mese},${giorno}`;
console.log(giornoCorrente);
var previous = data;
console.log(previous)
return Math.ceil((giornoCorrente - previous + 1) / 86400000);
}
//Date(year,month,day,hours,minutes,seconds,ms)
howManyDays(2001,08,11);*/


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.


function compare(_date2)    //non funziona
{  
  const _date = new Date();                                      //l'unico modo che sono riuscito a trovare per compare due date è:
  let _giorno = _date.getDate();                                  //prendere la data attuale, prendere solo giorno mese e anno
  let _mese = _date.getMonth() + 1;                               //metto +1 nei mesi perchè su js i mesi si calcolano da 0 a 11 cosi facendo si contanto da 1 a 12
  let _anno = _date.getFullYear();
  let _date1 = `${_mese}-${_giorno}-${_anno}`;                      //scriverlo in un linea di codice
  console.log(_date1)
  
  if (_date1 == _date2) {                                          //ho fatto varie comparazioni perchè '==' e '===' con le date non funzionano
    console.log("true");
  } else 
  console.log('false')
}
//                mm/gg/yyyy
let _d = new Date("11-10-2022")  
compare(_d); */   


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file



// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function idInventat(){
  let idInventato = document.getElementById('container');         //semplicemente prendo l'id del 'container'
  console.log(idInventato);
}
idInventat()
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function tdInventat(){
  let tdInventato = document.querySelectorAll('td');            //stesso di sopra ma con il queryselecorAll
  console.log(tdInventato);
}
tdInventat()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function ciia(){
  let tdCiclo = document.querySelectorAll('td');      //prendo tutti i 'td' 
  console.log(tdCiclo);
  for(let i of tdCiclo){                              //faccio un ciclo della variabile creata prima con i td all'interno
    console.log(i)                                    //mostro i td ottenuti nella console
  }
}
ciia();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const changeBackgroundUrls = function () {
  const linKambio = document.querySelectorAll('a');   //prendo tutti i link nel sito con 'a'         
  console.log(linKambio);
  for(let i of linKambio){                            //faccio il ciclo come prima
      i.style.backgroundColor = 'red';                //metto lo sfondo rosso per tutti i link
  }
}
changeBackgroundUrls()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addToTheSecond = function (content) {
  const Lista = document.getElementById("myList");    //prendo la lista del html
  Lista.innerHTML += `<li>${content}</li>`;           //aggiungo un altro punto nella lista non ordinata
}
addToTheSecond('Quattro');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const listaVuota = function () {
  const bean = document.querySelectorAll('li'); 
  console.log(bean);                                                  
  for(let mr of bean){                                        
      mr.innerText = ' ';                                     //cambio il testo dei 'li' con un stringa vuota
  }
}
listaVuota()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToTitle() {
  let cambioClasse = document.querySelectorAll("tr");           //raggruppo tutti i 'tr' in una variabile  
  for(let cl of cambioClasse)
  cl.classList.add("test");                                     //aggiungo la classe 'test' a tutti i tr nella pagina
};
addClassToTitle()
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
function isItPrime(number){
  if(number < 2){
    return false
  }
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      return false
    }
  }
  return true
}

console.log(isItPrime(7883))
/* Questo array viene usato per gli esercizi. Non modificarlo. 
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.*/

  macchina = {
    ruote: 4,
    marca: "audi",
    anno: 2016,
  };

const deleteProp = (oggetto, stringa) => {

  for (let p in oggetto) {            //inserisco le proprietà di oggetto in una variabile

    if (oggetto[p] === stringa) {     // confronto stringa con una proprieta della variabile

      delete oggetto[p];              //se l'if è true cancello la proprietà uguale alla stringa se if non trova corrispondenza non succede niente
    }
  }
  console.log(oggetto);
}
deleteProp(macchina, 4);


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


function filmPiuRecente(arr) {
  let nuovo = 0; 
  let filmPiuNuovo = 2000;                  //anno che si aggiorna in automatico
  for (let film of arr) {
    if (eval(film.Year) > filmPiuNuovo) {   //uso eval per fare la funzione
      filmPiuNuovo = eval(film.Year);       
      nuovo = arr.indexOf(film);            
    }
  }
  console.log('Il film più recente è uscito il ' + filmPiuNuovo);
}
filmPiuRecente(movies);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.z 
*/
function objectLength(arr) {
  let result = 0;
  for(var prop in arr) {
    if (arr.hasOwnProperty(prop)) {
      result++;
    }
  }
  console.log(`ci sono ${result} film `)
}

objectLength(movies);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

var annoFilm = [];
function onlyTheYears(arr) {
  
  for (let film of arr) {
    annoFilm.push(film.Year);
  }
  console.log(annoFilm);
}
onlyTheYears(movies)


/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/


function onlyInLastMillennium(arr) {
  return arr.filter((film) => {
    return film.Year <= 2000
  });
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(arr){
console.log(arr)
  let sum = 0;
  for (let p = 0; p < arr.length; p++) {
    sum += movies[p].Year
  }
  console.log( + sum ); 
}
sumAllTheYears(movies)

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/