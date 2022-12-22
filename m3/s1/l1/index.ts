var persona1: number = 34;
var persona2: number = 73;

var numeroCasuale: number = Math.floor(Math.random() * 100);
console.clear()
console.log(numeroCasuale);

function numeroGiusto(p1: number, p2: number, r: number) {
    var d1 = Math.abs(p1 - r);
    var d2 = Math.abs(p2 - r);
    if (d1 > d2) {
        console.log(`persona 2 si è avvicinata di più`);
    }
    else if (d1 < d2)
        console.log(`persona 1 si è avvicinata di più`);
    else if (p1 == r) {
        console.log(`persona 1 ha azzaccato il numero`);
    }
    else if (p1 == r) {
        console.log(`persona 2 ha azzeccato il numero`);
    }
}
numeroGiusto(persona1, persona2, numeroCasuale)
