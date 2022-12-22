interface ILavoratore {
    nome: string,
    occupazione: string,
    reddito: number,
    redditoAnnuo: number,
    calcoloTasse(): any,

}

class Lavoratore implements ILavoratore {
    nome: string;
    occupazione: string;
    reddito: number;
    redditoAnnuo: number;
    constructor(nome: string, occupazione: string, reddito: number) {
        this.nome = nome;
        this.occupazione = occupazione;
        this.reddito = reddito;
        this.redditoAnnuo = 0;
    }
    calcoloTasse() {
        if (this.reddito * 12 >= 100000) {
            let irpef = this.reddito * 12
            let inps = irpef - (irpef * 20) / 100;
            let irpefT = (irpef * 20) / 100;
            this.redditoAnnuo = inps - (inps * 30) / 100;
            let inpsT = (inps * 30) / 100;
            return this.nome + ', occupazione: ' + this.occupazione + ', reddito annuo:' + irpef + ', reddito Annuo Lordo:' + this.redditoAnnuo + ', Irpef:' + irpefT + ', Inps:' + inpsT + '.';
        } else if (this.reddito * 12 >= 50000) {
            let irpef = this.reddito * 12
            let inps = irpef - (irpef * 15) / 100;
            let irpefT = (irpef * 15) / 100;
            this.redditoAnnuo = inps - (inps * 25) / 100;
            let inpsT = (inps * 25) / 100;
            return this.nome + ', occupazione: ' + this.occupazione + ', reddito annuo:' + irpef + ', reddito Annuo Lordo:' + this.redditoAnnuo + ', Irpef:' + irpefT + ', Inps:' + inpsT + '.';
        } else {
            let irpef = this.reddito * 12
            let inps = irpef - (irpef * 10) / 100;
            let irpefT = (irpef * 10) / 100;
            this.redditoAnnuo = inps - (inps * 20) / 100;
            let inpsT = (inps * 20) / 100;
            return this.nome + ', occupazione: ' + this.occupazione + ', reddito annuo:' + irpef + ', reddito Annuo Lordo:' + this.redditoAnnuo + ', Irpef:' + irpefT + ', Inps:' + inpsT + '.';
        }
    }
}
var Maurizio = new Lavoratore('Maurizio', 'Artigiano', 2800);
console.log(Maurizio.calcoloTasse());
var Gioacchino = new Lavoratore('Gioacchino', 'Avvocato', 8000);
console.log(Gioacchino.calcoloTasse());
var Milena = new Lavoratore('Milena', 'Professoressa', 1480);
console.log(Milena.calcoloTasse());