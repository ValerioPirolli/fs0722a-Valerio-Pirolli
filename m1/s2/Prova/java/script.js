function aggiungiCifra(elemento) {

    let cifraCliccata = elemento.getAttribute('data-simbbolo');
    document.getElementById('display').value += cifraCliccata;

}
//-------------------------------------------------------------------------------------

function tot(){
    let numeri = document.getElementById('display');
    numeri.value = eval(numeri.value);
}
//-------------------------------------------------------------------------------------

function isSymbol(s){
    let simboli = ['x','/','+','-'];
    return simboli.includes(s);
}
//-------------------------------------------------------------------------------------
function clearInput(){
    document.getElementById("display").value = ""; 
  };

  var input = document.getElementById("display");

  input.addEventListener("keyup", function (e) {
      console.log(e.key);
  
  });
  
  function validate(characters) {
      console.log(characters.value);
  }
//-------------------------------------------------------------------------------------
let rimozione = []

function rimuoviCifra(elementoneg) { //funzione tutta mia e solo mia non l'ho copiata giuro

    let rim= document.getElementById("display").value; //prendo la cifra sul display
    console.log(rim)    

    var result = rim.toString().substring(0, rim.toString().length - 1); /* creo una variabile, prendo la variabile rim(che è il testo in input)
    la trasformo in stringa, tolgo l'ultimo carattere*/
        console.log(result);
        document.getElementById('display').value = result; //mando il result sul display

}
//-------------------------------------------------------------------------------------
function pi(elementopi) { 

    let rimpi= document.getElementById("display").value; //come prima prendo la cifra
    console.log(rimpi)  

        document.getElementById("display").value = rimpi * Math.PI;//e qui moltiplico la cifra per il pigreco

}


//-------------------------------------------------------------------------------------

function quadra(elemento22) { 

    let rim22= document.getElementById("display").value; 
    console.log(rim22)  

        document.getElementById("display").value = rim22 * rim22;//moltiplico la cifra per se stessa

}

//-------------------------------------------------------------------------------------

function v(elementov) { 

    let rimv= document.getElementById("display").value; 
    console.log(rimv)

        document.getElementById("display").value = Math.sqrt(rimv);

}