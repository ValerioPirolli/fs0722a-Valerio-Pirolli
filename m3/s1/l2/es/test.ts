var inputM = document.getElementById('input-m') as HTMLInputElement | null;
var inputF = document.getElementById('input-f') as HTMLInputElement | null;

class MotherAccount {
    saldo: number
    deposito: number
    constructor(saldo: number) {
        this.saldo = saldo
        this.deposito = 0
    }
    aggiungiSaldo(nm: number) {
        this.deposito += nm - (nm * 10) / 100;
        console.log('saldo attuale :' + this.deposito + ', saldo rimosso:' + nm + ' tasse:10%')
    }
    toglisaldo(nx: number) {
        if (this.deposito >= nx) {
            this.deposito -= nx;
            console.log('saldo attuale :' + this.deposito + ', saldo rimosso:' + nx)
        } else {
            console.log('che te ritiri si nun c\'hai li sordi')
        }
    }
}
class ChildAccount {
    saldo: number
    deposito: number
    constructor(saldo: number) {
        this.saldo = saldo
        this.deposito = 0
    }
    aggiungiSaldo(nm: number) {
        this.deposito += nm;
        console.log('saldo attuale :' + this.deposito)
    }
    toglisaldo(nx: number) {
        if (this.deposito >= nx) {
            this.deposito -= nx;
            console.log('saldo attuale :' + this.deposito + ', saldo rimosso:' + nx)
        } else {
            console.log('che te ritiri si nun c\'hai li sordi')
        }

    }
}
var mamma = new MotherAccount(0)
var figlio = new ChildAccount(0)
function bfa(n: any) {
    let y: number = +n;
    figlio.aggiungiSaldo(y)
}
function bft(n: any) {
    let y: number = +n;
    figlio.toglisaldo(y)
}
function bma(n: any) {
    let y: number = +n;
    mamma.aggiungiSaldo(y)
}
function bmt(n: any) {
    let y: number = +n;
    mamma.toglisaldo(y)
}