// tuple -> è un nuovo tipo di dato introdotto da TypeScript
// ci serve a definire un array che ha elementi di tipi diversi tra loro
// fissare il tipo di un numero di elementi (ad esempio i primi due) -> array avrà uno schema preciso dei tipi di dati
// array in cui voglio memorizzare nome e età di una persona -> il primo elemento string il secondo number
var persona: [string, number] = ["Mario Rossi", 25]
// tuple non hanno una dimensione fissa -> posso aggiungere senza definire i tipi
// è possibile aggiungere altri elementi purché dello stesso tipo di dati dichiarato
persona[3] = "Roma";
persona[5] = 1990
// array persona contiene sei elementi -> due di tipo stringa, due numerici e due undefined
// tuple garantisce solo che i primi due siano del tipo specificato
// tuple vincolano al rispetto dei tipi dichiarati
persona[4] = true; // non è previsto nella dichiarazione della tuple