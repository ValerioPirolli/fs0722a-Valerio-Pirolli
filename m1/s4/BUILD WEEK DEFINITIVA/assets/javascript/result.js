let risposteCarine= sessionStorage.getItem('array');
let ciccioGamer89= JSON.parse(risposteCarine)
console.log(ciccioGamer89)

let risposteCorrette=
[
"Ladro Tenta di Entrare",
"104514 gemme",
"Falso",
"Vero",
"2012",
"Gears Of War",
"Mirko",
"Mai Dire Talk",
"Vero",
"2017",
"7417",
"Si, a malincuore",
"Il guanciale"
]

//const arrayProva = ["Central Processing Unit",2,"The logo for Snapchat is a Bell","Falso",5,6,7,"140","Falso","Falso","Java","si, a malincuore","il guanciale"]
//const arrayProva = ["Central Processing Unit",2,"T3","4",5,6,7,"144","4","3","7417","si, a malincuore","il guanciale"]
//const arrayProva = ["Central Processing Unit","Final","The logo for Snapchat is a Bell.","Falso",".svg","Cascading Style Sheet","Nougat","140","Falso","Java","7417","si, a malincuore","il guanciale"]

let congratulazioni=document.querySelector('#congratulazioni')
let esamePassato=document.querySelector('#esame-passato')

let percentualeGiustaSchermo = document.querySelector("#percentualeG");
let percentualeSbagliataSchermo=document.querySelector('#percentualeS');

let numeroRisposteCorrette=document.querySelector('#p-risposte-corrette');
let numeroRisposteSbagliate=document.querySelector('#p-risposte-sbagliate');

let progressBar = document.querySelector("#cerchio-sbagliate");
let cerchioInterno = document.querySelector("#cerchio-giuste")

let bottone = document.querySelector('#bottone-result');
let hasbullah = document.querySelector('#send-email');

let numRispCorr=0

for (const risposta of ciccioGamer89) {
    if (risposteCorrette.includes(risposta)){
        numRispCorr++
    }
       
}
console.log(numRispCorr)


let funzionePercentualeGiusta = function(a, b){
    return (a/b)*100
}
let funzionePercentualeSbagliata = function(a, b){
  return ((risposteCorrette.length - a) / b) * 100;
}

let percentualeRisposteGiuste = funzionePercentualeGiusta(numRispCorr,risposteCorrette.length).toFixed(2);
console.log(percentualeRisposteGiuste)  //funzione per calcolare le risposte corrette
let percentualeRisposteSbagliate = funzionePercentualeSbagliata(numRispCorr,risposteCorrette.length).toFixed(2);
console.log(percentualeRisposteSbagliate)

numeroRisposteCorrette.innerHTML= `${numRispCorr}/${ciccioGamer89.length} questions`
let numRispSbagl = 13 - numRispCorr 
numeroRisposteSbagliate.innerHTML= `${numRispSbagl}/${ciccioGamer89.length} questions`


//-----------------------------------------------------------------------------


let risposteSbagliatePercentualeSenzaValoriDecimali = Math.floor(percentualeRisposteSbagliate);
let risposteGiustePercentualeSenzaValoriDecimali = 100 - risposteSbagliatePercentualeSenzaValoriDecimali;

let progressGValue = 0;
let progressGEndValue =  risposteGiustePercentualeSenzaValoriDecimali;
let progressValue = 0;                                                      //valore iniziale
let progressEndValue = risposteSbagliatePercentualeSenzaValoriDecimali;     //valore finale
let speed = 30;                                                             //velocita animazione

let progress = setInterval(() => {
  progressValue++;
  percentualeSbagliataSchermo.textContent = `${progressValue}%`;
 
  progressBar.style.background = `conic-gradient(
      #d20094 ${progressValue * 3.6}deg,
      transparent ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
    percentualeSbagliataSchermo.textContent = `${percentualeRisposteSbagliate}%`;
    
  }

}, speed);


      let progressG = setInterval(() => {
        progressGValue++;
        percentualeGiustaSchermo.textContent = `${progressGValue}%`;
        cerchioInterno.style.background = `conic-gradient(
            #0ff ${progressGValue * 3.6}deg,
            transparent ${progressGValue * 3.6}deg
        )`
        if (progressGValue == progressGEndValue) {
          clearInterval(progressG);
          percentualeGiustaSchermo.textContent = `${percentualeRisposteGiuste}%`;
        }
       
      
      }, speed);



//---------------------------------------------------------------------------

if (percentualeRisposteGiuste >= 60){
   congratulazioni.innerHTML ='Congratulazioni Paguro!'
   esamePassato.innerHTML="Hai passato l'esame da Paguro."
   hasbullah.innerHTML="Se sei arrivato fin qui significa che sei un grande fan dello youtuber più fantastico d'Italia.<br>Scrivi 'paguro' nella sezione Feedback per entrare nel club d'eccellenza paguriana."

}else{
    congratulazioni.innerHTML ='Sei proprio un granchio!'
    esamePassato.innerHTML="Non hai passato l'esame da Paguro."
    hasbullah.innerHTML="Non ti abbattere! Con un pò di impegno anche tu riuscirai ad entrare nell'esercito dei paguri, la prossima volta studia di più prima di effettuare questo test!!!"
}





function reindirizzamento(){
    window.location.href = 'feedback.html'
}

bottone.addEventListener('click', reindirizzamento);
