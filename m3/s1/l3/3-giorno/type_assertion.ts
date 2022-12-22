// Type assertion -> imposta il tipo di un valore e dice al compilatore di non non inferirlo
// la usiamo quando abbiamo una comprensione migliore del tipo di dato rispetto a ciò che TypeScript deduce da solo
let code: any = 123;
let employeeCode = <number> code;  // sappiamo che il codice è un numero anche se era dichiarato any
                                   // abbiamo asserito che in questo caso il codice è di tipo number
console.log(typeof(employeeCode)); // ora employeeCode è number

// let employee = {};
// employee.name = "John" // errore -> proprietà nome non esiste nel type {}
// employee.code = 123 // errore -> proprietà nome non esiste nel type {}

interface Employee {          // uso l'interfaccia per definire la struttura delle variabili
    name:string;
    code:number;
}
let employee = <Employee> {} // uso l'interfaccia per fare l'asserzione di tipo
employee.name = "John"       // ok
employee.code = 123          // ok
console.log(typeof(employee.name));
console.log(typeof(employee.code));
console.log(employee.name);
console.log(employee.code);