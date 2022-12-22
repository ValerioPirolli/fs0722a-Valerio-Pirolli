
interface ICapoAbbigliamento{
    id:number,
    codProd:number,
    collezione:number,
    capo:string,
    modello:number,
    quantita:number,
    colore:string,
    prezzoIvaEsclusa:number,
    prezzoIvaInclusa:number,
    disponibile:string,
    saldo:number
}

 abstract class CapoAbbigliamento implements ICapoAbbigliamento{
    id:number;
    codProd:number;
    collezione:number;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoIvaEsclusa:number;
    prezzoIvaInclusa:number;
    disponibile:string;
    saldo:number;
    constructor(id:number,codProd:number,collezione:number,capo:string,modello:number,quantita:number
                ,colore:string,prezzoIvaEsclusa:number,prezzoIvaInclusa:number,disponibile:string,saldo:number){
                    this.id=id;
                    this.codProd=codProd;
                    this.collezione=collezione;
                    this.capo=capo;
                    this.modello=modello;
                    this.quantita=quantita;
                    this.colore=colore;
                    this.prezzoIvaEsclusa=prezzoIvaEsclusa;
                    this.prezzoIvaInclusa=prezzoIvaInclusa;
                    this.disponibile=disponibile;
                    this.saldo=saldo;
                }
    getSaldoCapo(){
        let i = (this.prezzoIvaInclusa/100)*this.saldo
        return i.toFixed(2);
    };
    getAcquistoCapo(){
        let i = this.prezzoIvaInclusa-(this.prezzoIvaInclusa/100)*this.saldo;
        return i.toFixed(2);
    }
}

class CapoAbbigliamento2 extends CapoAbbigliamento{};

let ListaC= async function(){
    try{
        let lista= await fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f");
        return lista.json();
    }
    catch{
        console.log("Errore nel caricamento dei dati");
    }
}
let Capi= async function(){
    let lista = await ListaC();

    for (let capo of lista){
        let AbbX = new CapoAbbigliamento2(capo.id,capo.codprod,capo.collezione,capo.capo,capo.modello,capo.quantita,capo.colore,capo.prezzoivaesclusa,capo.prezzoivainclusa,capo.disponibile,capo.saldo);
        console.table(AbbX)
        console.log(AbbX.getAcquistoCapo())
        console.log(AbbX.getSaldoCapo())
    }

}
Capi()