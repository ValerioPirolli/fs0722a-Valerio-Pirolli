var inputM = document.getElementById('input-m');
var inputF = document.getElementById('input-f');
var MotherAccount = /** @class */ (function () {
    function MotherAccount(saldo) {
        this.saldo = saldo;
        this.deposito = 0;
    }
    MotherAccount.prototype.aggiungiSaldo = function (nm) {
        this.deposito += this.saldo;
        this.deposito += nm - (nm * 10) / 100;
        console.log('saldo attuale :' + this.deposito + ', saldo rimosso:' + nm + ' tasse:10%');
    };
    MotherAccount.prototype.toglisaldo = function (nx) {
        if (this.deposito >= nx) {
            this.deposito -= nx;
            console.log('saldo attuale :' + this.deposito + ', saldo rimosso:' + nx);
        }
        else {
            console.log('che te ritiri si nun c\'hai li sordi');
        }
    };
    return MotherAccount;
}());
var ChildAccount = /** @class */ (function () {
    function ChildAccount(saldo) {
        this.saldo = saldo;
        this.deposito = 0;
    }
    ChildAccount.prototype.aggiungiSaldo = function (nm) {
        this.deposito += nm;
        console.log('saldo attuale :' + this.deposito);
    };
    ChildAccount.prototype.toglisaldo = function (nx) {
        if (this.deposito >= nx) {
            this.deposito -= nx;
            console.log('saldo attuale :' + this.deposito + ', saldo rimosso:' + nx);
        }
        else {
            console.log('che te ritiri si nun c\'hai li sordi');
        }
    };
    return ChildAccount;
}());
var mamma = new MotherAccount(1000);
var figlio = new ChildAccount(0);
function bfa(n) {
    var y = +n;
    figlio.aggiungiSaldo(y);
}
function bft(n) {
    var y = +n;
    figlio.toglisaldo(y);
}
function bma(n) {
    var y = +n;
    mamma.aggiungiSaldo(y);
}
function bmt(n) {
    var y = +n;
    mamma.toglisaldo(y);
}
