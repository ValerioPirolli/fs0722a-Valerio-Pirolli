var mytuple = [10, "Hello", "World", "TypeScript"]; // i tipi vengono dedotti
console.log(mytuple[0]);
console.log(mytuple[1]);
// per fare operazioni sulle tuple sono supportati i metodi degli array
console.log("Items before push " + mytuple.length); // ritorna la lunghezza della tuple (4)
mytuple.push(12); // appende il valore alla tuple
console.log("Items after push " + mytuple.length); // ritorna la lunghezza della tuple (5)
console.log("Items before pop " + mytuple.length); // 5
console.log(mytuple.pop() + " popped from the tuple"); // pop rimuove e restitiuisce l'item
console.log("Items after pop " + mytuple.length); // 4
// le tuple sono mutabili possono aggiornare i valori
console.log("Tuple value at index 0 " + mytuple[0]);
// update a tuple
mytuple[0] = 121;
console.log("Tuple value at index 0 changed to " + mytuple[0]);
