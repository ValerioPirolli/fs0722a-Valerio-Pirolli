const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

const setDomande = [
    {
        domande: "What does CPU stand for?",
        risposte: [
            "Central Processing Unit",
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ]
    },
    {
        domande:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        risposte: [
            "Static",
            "Private", 
            "Public",
            "Final",
        ]
    }
]

let domanda = document.querySelector('#titolo-test');

let labelRispostaAll = document.querySelectorAll('label');
console.log(labelRispostaAll)
let radioRisposta1 = document.querySelector('#risposta1');
let radioRisposta2 = document.querySelector('#risposta2');
let radioRisposta3 = document.querySelector('#risposta3');
let radioRisposta4 = document.querySelector('#risposta4');



window.onload = function(){
    for(let elemento of setDomande){
        domanda.textContent = elemento.domande
        for(let i = 0 ; i < labelRispostaAll.length; i++ ){
            labelRispostaAll[i].textContent = elemento.risposte[i]
        }
    }
}
let pulsanteComparsa

/*function elimina(chiave,valore,array){
    let copiaArray = [...array];//metto in salvo l'array originale
    console.log(copiaArray[indice],indice)
    let indice = copiaArray.findIndex((e)=> e[chiave] == valore) //trovo l'indice
    console.log(copiaArray)
    copiaArray.splice(indice,1);//prendi questo array vai a cercare l'indice 1 e lo elimini
    console.log(copiaArray)
    return copiaArray
}

elimina(id, 2 , utenti)*/