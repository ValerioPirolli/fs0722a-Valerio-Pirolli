const domandaSets = [
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        risposteSet: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        risposteSet: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        tipo: "boolean",
        difficulty: "easy",
        domandaSet: "The logo for Snapchat is a Bell.",
        correct_answer: "Falso",
        risposteSet: "Vero",
    },
    {
        category: "Science: Computers",
        tipo: "boolean",
        difficulty: "easy",
        domandaSet:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "Falso",
        risposteSet: "Vero",
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        risposteSet: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        risposteSet: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        risposteSet: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        risposteSet: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        tipo: "boolean",
        difficulty: "easy",
        domandaSet: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "Falso",
        risposteSet: "Vero",
    },
    {
        category: "Science: Computers",
        tipo: "multipla",
        difficulty: "easy",
        domandaSet:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        risposteSet: ["Python", "C", "Jakarta"],
    },
];
//definiamo un array di oggetti con i set di domande, risposta e il tipo di domanda (multipla o vero/falso).
const setDomande = [
    {
        tipo: "multipla",
        domandaSet: "TERRIFICANTE: ..... ..... in casa mentre Registro Moto gp 15 (non è uno scherzo)",
        risposteSet: [
            "Ladro Tenta di Entrare",
            "Ragno mi morde",
            "Un cornetto volante entra",
            "Un ladro entra",
        ]
    },
    {

        tipo: "multipla",
        domandaSet: "Quante gemme CiccioGamer89 ha comprato per il più grande chest opening ITALIANO?",
        risposteSet: ["104514 gemme", "100000 gemme", "154891 gemme", "108423 gemme"],
    },
    {

        tipo: "boolean",
        domandaSet: "E’ stato il cornetto alla marmellata a dare via al meme “PIJATELO PIJATELO”?",
        risposteSet: ["Vero", "Falso"]
    },
    {

        tipo: "boolean",
        domandaSet: "Ciccio si è sottoposto alla addominoplastica?",
        risposteSet: ["Vero", "Falso"]
    },
    {

        tipo: "multipla",
        domandaSet: "In che anno CiccioGamer89 ha pubblicato il suo primo video?",
        risposteSet: ["2011", "2012", "2013", "2014"],
    },
    {

        tipo: "multipla",
        domandaSet: "Qual è stato il primo gioco al quale si è appassionato?",
        risposteSet: [
            "Gears Of War",
            "Call Of Duty",
            "Battlefield",
            "FIFA",
        ],
    },
    {

        tipo: "multipla",
        domandaSet: "Qual'è il vero nome di CiccioGamer89?",
        risposteSet: [
            "Mirko",
            "Fabio",
            "Marco",
            "Giorgio",
        ],
    },
    {

        tipo: "multipla",
        domandaSet: "In quale trasmissione televisiva è stato ospitato CiccioGamer89?",
        risposteSet: ["Mai Dire Talk", "Le Iene", "Grande Fratello VIP", "Maurizio Costanzo Show"],
    },
    {

        tipo: "boolean",
        domandaSet: "CiccioGamer89 ha mai pubblicato un suo libro su Fortnite?",
        risposteSet: ["Vero", "Falso"]
    },
    {

        tipo: "multipla",
        domandaSet: "In che anno Ciccio giocò per la prima volta a Fortnite?",
        risposteSet: ["2017", "2018", "2019", "2016"],
    },
    {
        tipo: "multipla",
        domandaSet: "Quanti video ha fatto Cicciogamer89?",
        risposteSet: ["4112", "7417", " 13964", "7416"]
    },
    {
        tipo: "boolean",
        domandaSet: "Cicciogamer89 è fidanzato?",
        risposteSet: ["Ii, a malincuore", "No, è uno spirito libero"]
    },
    {
        tipo: "boolean",
        domandaSet: "Sulla carbocrema suprema ci va... ",
        risposteSet: ["Il guanciale", "La pancetta"]
    }



]

//agganciamo tutti gli elementi html necessari.
let domanda = document.querySelector("#titolo-test")
let risposte = document.querySelectorAll("label");
let radios = document.querySelectorAll("input");
let bottone = document.querySelector("#button-conferma")
let contatore = document.querySelector("#contatore-domande");
let secondiSpan = document.getElementById("tempo")
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let secondiP = document.querySelector("#secondi");
let button = document.querySelector("#restart");
let onGoing = false;
let progress;
var risposteFornite = [];
let domandaSetNumber = 0


//iniziamo a creare la funzione del timer.
let progressValue = 61;
let progressEndValue = 0;

function scattaTimer() {                                    //per ogni secondo passato, partendo da 60, il colore del cerchio interno al timer scatterà di--
    onGoing = true;                                         //6 gradi in senso anti-orario, simulando appunto un timer. Ad ogni scatto il colore della--
    progressValue--;                                        //gradazione cambierà proporzionalmente ai secondi.
    valueContainer.textContent = progressValue;
    progressBar.style.background = `conic-gradient(
      #00ffff ${progressValue * 6}deg,
      #0c113b ${progressValue * 6}deg)`;
    if (progressValue == progressEndValue) {
        risposteFornite.push("timer scaduto");              //se il timer scadrà verrà caricata una domanda successiva e nel nostro array che conterrà tutte--
        aggiungiDomandatimer();                             //le risposte verrà pushato la stringa "timer scaduto" che sarà calcolata come risposta errata.
        progressValue = 61;
    }
}


function timer() {                                          //la funzione timer richiamerà la funzione scattaTimer, verificando prima che il timer si sia--
    if (onGoing == false) {                                 //fermato e che la gradazione giri per ogni secondo effettivo.
        progress = setInterval(scattaTimer, 1000);
    }
    else {                                                  //nel caso in cui il timer sia in corso allora stoppiamo il tempo e facciamo si che ad una--
        clearInterval(progress);                            //prossima chiamata riparta da 0.
        onGoing = false;
        progress = setInterval(scattaTimer, 1000);
    }
}


function getRandom(elementi) {                              //la funzione getRandom fa si che venga generato dinamicamente un array di 4 elementi numerici--
    let array = [];                                         //composti, ad ogni chiamata, di numeri random da 0 a 3 in posizione randomica. 
    while (array.length < elementi) {                        //Il senso di tale funzione è che per ogni caricamento delle risposte di una determinata domanda--
        let random = Math.floor(Math.random() * elementi);  //esse vengano generate in posizioni sempre diverse, in quanto basate sugli index randomici--
        if (!array.includes(random)) {                       //forniti dal nostro array.
            array.push(random);
        }
    }
    return array;
}


let coloraBottone = function () {                                //la funziona coloraBottone fa si che ogni qualvolta venga selezionata una risposta, il--
    for (let c = 0; c < radios.length; c++) {                    //bottone "Conferma" si illumini per farne intuire l'interagibilità prima non presente.
        if (radios[c].checked) {
            bottone.classList.add('button-conferma-cliccato')    //per fare ciò, facciamo aggiungere una classa definita in CSS che verrà aggiunta e poi--
        }                                                        //successivamente rimossa nelle istruzioni di chiamata di tale funzione.
    }
}


window.onload = function () {                                                                    //per il primo load della pagina facciamo startare--
    let arrayRandom = getRandom(risposte.length);                                                //immediatamente il timer e stampiamo domanda e risposte--
    timer();                                                                                     //in posizione 0.
    contatore.textContent = domandaSetNumber + 1 + '/' + setDomande.length;
    domanda.textContent = setDomande[domandaSetNumber].domandaSet;
    for (let i = 0; i < arrayRandom.length; i++) {
        risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[arrayRandom[i]];
    }
}


let aggiungiDomanda = function () {                                                  //la funzione aggiungiDomanda farà si che al click del bottone conferma--
    bottone.classList.remove('button-conferma-cliccato')                             //(e quindi alla risposta confermata) venga caricata la domanda seguente.
    for (let c = 0; c < radios.length; c++) {
        if (radios[c].checked) {               //ci assicuriamo che uno dei radio button sia selezionato
            progressValue = 61;                //reimpostiamo il timer e lo facciamo ripartire
            timer();
            risposteFornite.push(risposte[c].textContent)         //carichiamo nell'array la risposta fornita.
            domandaSetNumber++;
            if (domandaSetNumber == setDomande.length) {                               //con queste tre istruzioni passeremo alla pagina result.html l'array--
                sessionStorage.setItem('array', JSON.stringify(risposteFornite))       //con le risposte aggiornate di volta in volta, così da potere fare--
                window.location.href = "result.html"                                   //successivamente la valutazione finale.
            }
            arrayRandom = getRandom(risposte.length);
            contatore.textContent = domandaSetNumber + 1 + "/" + setDomande.length;
            radios[c].checked = false;
            domanda.textContent = setDomande[domandaSetNumber].domandaSet;
            if (setDomande[domandaSetNumber].tipo == "multipla") {                                       //ci assicuriamo che la domanda da caricare sia di--
                for (let i = 0; i < arrayRandom.length; i++) {                                           //tipo multipla.
                    risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[arrayRandom[i]];
                }
                risposte[2].style.display = "inline-block";
                risposte[3].style.display = "inline-block";
            }
            else {                                                                             //se così non fosse allora mostreremo a schermo unicamente due--
                for (let i = 0; i < 2; i++) {                                                  //label, nascondendo gli altri due (che potranno poi essere--
                    risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[i];     //rimostrati nel caso di un true nella condizione di domanda--
                }                                                                              //multipla.
                radios[2].style.display = "none"
                risposte[2].style.display = "none";
                radios[3].style.display = "none";
                risposte[3].style.display = "none";
            }
        }
    }
}


let aggiungiDomandatimer = function () {                           //con la funziona aggiundiDomandatimer semplicemente svolgiamo esattamente tutte le--
    bottone.classList.remove('button-conferma-cliccato')           //istruzioni indicate nell'aggiundiDomanda. Tuttavia essa potrà essere richiamata solo--
    domandaSetNumber++                                             //ed esclusivamente quando scadrà il timer, così che il sistema possa caricare la--
    if (domandaSetNumber == setDomande.length) {                   //domanda successiva.
        window.location.href = "result.html"
    }
    arrayRandom = getRandom(risposte.length);
    contatore.textContent = domandaSetNumber + 1 + "/" + setDomande.length;
    domanda.textContent = setDomande[domandaSetNumber].domandaSet;
    if (setDomande[domandaSetNumber].tipo == "multipla") {
        for (let i = 0; i < arrayRandom.length; i++) {
            risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[arrayRandom[i]];
        }
        risposte[2].style.display = "inline-block";
        risposte[3].style.display = "inline-block";
    }
    else {
        for (let i = 0; i < 2; i++) {
            risposte[i].textContent = setDomande[domandaSetNumber].risposteSet[i];
        }
        radios[2].style.display = "none"
        risposte[2].style.display = "none";
        radios[3].style.display = "none";
        risposte[3].style.display = "none";
    }
}


bottone.addEventListener("click", aggiungiDomanda)        //richiamiamo l'evento aggiundiDomanda per il click del bottone.

for (let c = 0; c < radios.length; c++) {                 //richimiamo l'evento per il click dei radio e la colorazione del bottone di conferma.
    radios[c].addEventListener('click', coloraBottone)

}


console.log(risposteFornite);      //in log possiamo verificare la presenza delle risposte nel nostro array.

