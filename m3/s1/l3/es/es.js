var Lavoratore = /** @class */ (function () {
    function Lavoratore(nome, occupazione, reddito) {
        this.nome = nome;
        this.occupazione = occupazione;
        this.reddito = reddito;
        this.redditoAnnuo = 0;
    }
    Lavoratore.prototype.calcoloTasse = function () {
        if (this.reddito * 12 >= 100000) {
            var irpef = this.reddito * 12;
            var inps = irpef - (irpef * 20) / 100;
            var irpefT = (irpef * 20) / 100;
            this.redditoAnnuo = inps - (inps * 30) / 100;
            var inpsT = (inps * 30) / 100;
            return this.nome + ', occupazione: ' + this.occupazione + ', reddito annuo:' + irpef + ', reddito Annuo Lordo:' + this.redditoAnnuo + ', Irpef:' + irpefT + ', Inps:' + inpsT + '.';
        }
        else if (this.reddito * 12 >= 50000) {
            var irpef = this.reddito * 12;
            var inps = irpef - (irpef * 15) / 100;
            var irpefT = (irpef * 15) / 100;
            this.redditoAnnuo = inps - (inps * 25) / 100;
            var inpsT = (inps * 25) / 100;
            return this.nome + ', occupazione: ' + this.occupazione + ', reddito annuo:' + irpef + ', reddito Annuo Lordo:' + this.redditoAnnuo + ', Irpef:' + irpefT + ', Inps:' + inpsT + '.';
        }
        else {
            var irpef = this.reddito * 12;
            var inps = irpef - (irpef * 10) / 100;
            var irpefT = (irpef * 10) / 100;
            this.redditoAnnuo = inps - (inps * 20) / 100;
            var inpsT = (inps * 20) / 100;
            return this.nome + ', occupazione: ' + this.occupazione + ', reddito annuo:' + irpef + ', reddito Annuo Lordo:' + this.redditoAnnuo + ', Irpef:' + irpefT + ', Inps:' + inpsT + '.';
        }
    };
    return Lavoratore;
}());
var Maurizio = new Lavoratore('Maurizio', 'Artigiano', 2800);
console.log(Maurizio.calcoloTasse());
var Gioacchino = new Lavoratore('Gioacchino', 'Avvocato', 8000);
console.log(Gioacchino.calcoloTasse());
var Milena = new Lavoratore('Milena', 'Professoressa', 1480);
console.log(Milena.calcoloTasse());
