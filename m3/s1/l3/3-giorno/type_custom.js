// tipo unione descrive un valore che può essere di diversi tipi
// lo usiamo quando un valore non è sotto il nostro controllo (ad esempio potrebbe essere sia string che number)
// non uso any per limitare i tipi possibili
var multiType;
multiType = 20; // valido
multiType = true; // valido
// multiType = "twenty" // non è valido
// ho valori che possono essere numeri o stringhe, se sono entrambi numeri somma, se sono entrambe stringhe concatena, altrimenti errore
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); // returns "onetwo"
console.log(add(1, 2)); // returns 3
console.log(add('one', 2)); // returns error
