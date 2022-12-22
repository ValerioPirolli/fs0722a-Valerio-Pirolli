// uso di più variabili di tipo
// funzione identity che accetta due parametri -> posso usare due generics T, U e assegno tipo diversi a ogni parametro e a ogni tipo
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}
// inizializzo una variabile chiamando la funzione identity e assegno i tipi per gli argomenti value e message
let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');
// TypeScript il tipo di dati e restituisce un errore se si verifica un conflitto
returnNumber = returnNumber * 100 // ok
// returnString = returnString * 100 // errore -> non mi lascia assegnare number a string
// returnBoolean = returnBoolean * 100 // errore