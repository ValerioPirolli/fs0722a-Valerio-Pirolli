// interfacce è un contratto sintattico stabilisce la sintassi a cui deve aderire qualsiasi entità
// le interfacce definiscono proprietà/metodi che sono i membri dell'interfaccia (contengono solo le dichiarazioni dei membri)
// sarà nelle classi derivate che andremo a definire i membri -> fornisco una struttura standard che le classi seguono
interface IPerson {
    firstname:string,
    lastname:string,
    sayHi: ()=>string
}
var customer:IPerson = {    // l'oggetto ha il vincolo definito nell'interfaccia
    firstname:"Tom",
    lastname:"Hanks",
    sayHi: ():string =>{return "Hi there"}
}
console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayHi());

var employee:IPerson = {
    firstname:"Tizio",
    lastname:"Caio",
    sayHi: ():string =>{return "Ciao"}
}
console.log(employee.firstname);
console.log(employee.lastname);
console.log(employee.sayHi());

// ereditarietà

interface Person {
    age:number
}

interface Musician extends Person {
    instrument:string
}

var drummer = <Musician>{};
drummer.age = 27
drummer.instrument = "Batteria"
console.log("Age: "+drummer.age)
console.log("Instrument: "+drummer.instrument)