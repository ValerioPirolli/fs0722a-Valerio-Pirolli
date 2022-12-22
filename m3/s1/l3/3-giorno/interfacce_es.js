var customer = {
    firstname: "Tom",
    lastname: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayHi());
var employee = {
    firstname: "Tizio",
    lastname: "Caio",
    sayHi: function () { return "Ciao"; }
};
console.log(employee.firstname);
console.log(employee.lastname);
console.log(employee.sayHi());
var drummer = {};
drummer.age = 27;
drummer.instrument = "Batteria";
console.log("Age: " + drummer.age);
console.log("Instrument: " + drummer.instrument);
