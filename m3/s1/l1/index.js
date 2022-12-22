var persona1 = 34;
var persona2 = 73;
var numeroCasuale = Math.floor(Math.random() * 100);
console.clear();
console.log(numeroCasuale);
function numeroGiusto(p1, p2, r) {
    var d1 = Math.abs(p1 - r);
    var d2 = Math.abs(p2 - r);
    if (d1 > d2) {
        console.log("persona 2 si \u00E8 avvicinata di pi\u00F9");
    }
    else if (d1 < d2)
        console.log("persona 1 si \u00E8 avvicinata di pi\u00F9");
    else if (p1 == r) {
        console.log("persona 1 ha azzaccato il numero");
    }
    else if (p1 == r) {
        console.log("persona 2 ha azzeccato il numero");
    }
}
numeroGiusto(persona1, persona2, numeroCasuale);
