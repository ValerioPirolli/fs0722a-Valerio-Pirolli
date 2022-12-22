// tipi lettarali possiamo definire un set customizzato di valori possibili
// non solo string, number, boolean ma possiamo specificare che valori esatti le nostre stringhe, numeri, booleani possono avere
// riduzione -> elenco i casi potenziali possibili
type testResult = "passato" | "fallito" | "incompleto" 
let myResult: testResult;   // i valori possibili sono quelli che ho elencato
myResult = "incompleto";    // valida
myResult = "passato";       // valida
//myResult = "fallimento"     // invalida

type dado = 1 | 2 | 3 | 4 | 5 | 6
let tirodado: dado;
tirodado = 1;       // valido
tirodado = 6;       // valido
// tirodado = 7;       // non è valido