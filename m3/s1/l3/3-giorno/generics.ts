// I generiscs sono un modo per indicare a funzioni/class/interfacce etc che tipo di dato si vuole usare al momento della chiamata
// funziona un po' come il passaggio di argomenti ad una funziona MA indica anche il tipo che deve aspettarsi alla chiamata
// quando li usiamo? - ad esempio quando abbiamo una gamma di dati diversi - quando usiamo quel tipo di dati in diversi punti
// i vantaggi? - possibilità di riutilizzare il codice - ridurre la necessità di fare ricorso al tipo any
/*
function getArray(items: any[]): any[] {
    return new Array().concat(items);
}
*/
// la funzione getArray genere un array di elementi di tipo any
// variabile numberArray che chiama la funzione getArray e passa dei valori numerici e stringArray passa stringhe
// let numberArray = getArray([5, 10, 15, 20]);
// let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
// numberArray.push(25);                       // ok
// stringArray.push('Rabbits');                // ok
// numberArray.push('This is not a number');   // ok
// stringArray.push(30);                       // ok
// console.log(numberArray);                   // 5, 10, 15, 20, 25, "This is not a number"
// console.log(stringArray);                   // 'Cats', 'Dogs', 'Birds', 'Rabbits', 30
// posso stabilire il tipo di valore che l'array contiene e che quindi TypeScript possa verificare che quel tipo è rispettato
// generics -> riscrivo la funzione getArray usando i generics
function getArray<T>(items : T[]): T[] {
    return new Array<T>().concat(items);
}
// i generics definiscono una o più variabili tipo -> identificano i tipi che vengono passati racchiusi tra < >
// T è un nome comunemente usato, ma è possibile chiamarlo come si vuole
// viene passato alla prima dichiarazione e poi viene usato per popolare nelle altre dichiarazioni
// nella funzione getArray uso T per specificare (1)il tipo di parametri, (2)il tipo restituito dalla funzione e (3)restituisce il nuovo array
// adesso per richiamare la funzione è sufficiente passare il <type> 
// -> getArray<number> -> acceterà una matrice di valori number e restituirà una matrice di valori number
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                       // ok
//numberArray.push("This is not a number")  // genera errore
let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');                // ok
//stringArray.push(30);                       // genera errore
// se si omette la variabile di tipo quando si chiama la funzione sarà TypeScript a dedurlo
// funziona solo su tipi di dati semplici (string, number, boolean, null, undefined), se passo array o oggetti -> restituisce any
