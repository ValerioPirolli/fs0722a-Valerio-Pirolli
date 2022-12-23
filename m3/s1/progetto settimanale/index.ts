interface Ismartphone{
    credito:number,
    numeroChiamate:number,
    ricarica(n:number):number,
}
abstract class smartphone implements Ismartphone{
    credito:number;
    numeroChiamate:number;
    constructor(credito:number, numeroChiamate:number){
        this.credito = credito
        this.numeroChiamate = numeroChiamate
    }
    public ricarica(n:number):number{
        this.credito += n
        return this.credito
    }
}
class smartphone2 extends smartphone{    
    conta:any;
    check:any=null
    public call(q:number):void{        
        let costo:number = (q/60) * 0.20
        if(firts_user.credito > costo ){
            console.log('chiamata effettuata, costo: ' + costo)
            this.credito -= costo
            this.numeroChiamate ++
            console.log('il credito residuo è: ' + this.credito)
            costo=0;
        }else{
            console.log('nun c\'hai li sordi pe chiamà')
            costo=0;
        }
    };
    public numero404():number{
        console.log("il tuo credito è: "+this.credito);
        return this.credito
    }
    public getNumeroChiamate():number{
        if(this.numeroChiamate==undefined){this.numeroChiamate=0}
        console.log("Chimate fatte: "+this.numeroChiamate)
        return this.numeroChiamate
    }
    public azzeraChiamate():void{
        this.numeroChiamate = 0
        console.log('chiamate azzerate: '+this.numeroChiamate)
    }
    chiamata():number{
        if(firts_user.conta==undefined){
            firts_user.conta=1;
            console.log(firts_user.conta)
            return firts_user.conta
        }
        else{
            firts_user.conta++
            console.log(firts_user.conta)
            return firts_user.conta
        }        
    }
    iniziaChiamata(){

        if(firts_user.check==null){                       
            firts_user.check=setInterval(this.chiamata,1000)
            return firts_user.check
        }

    }
    finisciChiamata(){
        this.call(firts_user.conta) 
        clearInterval(this.check);
        this.conta=undefined;                     
        this.check=null;  
        this.numeroChiamate+1;                    
    }
    
}
var firts_user = new smartphone2(0,0)
/*
console.log('credito: ' + firts_user.credito)
console.log('numero chiamate: ' + firts_user.numeroChiamate)
firts_user.call(10)
console.log('ricarica: ' + firts_user.ricarica(60))
firts_user.call(20)
console.log('credito 404: ' + firts_user.numero404())
console.log('numero chiamate: ' + firts_user.getNumeroChiamate())
firts_user.azzeraChiamate()
*/




function aggiungiCifra(elemento:any)  
    {
        let cifraCliccata=elemento.getAttribute("data-simbolo");     
        (<HTMLInputElement>document.getElementById("casellaInput")).value+=cifraCliccata;   
    }
    function dlt()                                                      
    {
        (<HTMLInputElement>document.getElementById("casellaInput")).value=(<HTMLInputElement>document.getElementById("casellaInput")).value.substring(0, (<HTMLInputElement>document.getElementById("casellaInput")).value.length-1);      
    }

  var ricarica=(<HTMLInputElement>document.getElementById("ricarica"));
  ricarica.addEventListener("click",function ricarica2(){
    let inputText=Number((<HTMLInputElement>document.getElementById("casellaInput")).value);
    firts_user.credito += inputText
    console.log(inputText);
    console.log("caricato",firts_user.credito);
    (<HTMLInputElement>document.getElementById("casellaInput")).value="";
        return firts_user.credito
  })
    