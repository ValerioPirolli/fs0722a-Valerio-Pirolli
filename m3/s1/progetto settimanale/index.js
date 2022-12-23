var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var smartphone = /** @class */ (function () {
    function smartphone(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    smartphone.prototype.ricarica = function (n) {
        this.credito += n;
        return this.credito;
    };
    return smartphone;
}());
var smartphone2 = /** @class */ (function (_super) {
    __extends(smartphone2, _super);
    function smartphone2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.check = null;
        return _this;
    }
    smartphone2.prototype.call = function (q) {
        var costo = (q / 60) * 0.20;
        if (firts_user.credito > costo) {
            console.log('chiamata effettuata, costo: ' + costo);
            this.credito -= costo;
            this.numeroChiamate++;
            console.log('il credito residuo è: ' + this.credito);
            costo = 0;
        }
        else {
            console.log('nun c\'hai li sordi pe chiamà');
            costo = 0;
        }
    };
    ;
    smartphone2.prototype.numero404 = function () {
        console.log("il tuo credito è: " + this.credito);
        return this.credito;
    };
    smartphone2.prototype.getNumeroChiamate = function () {
        if (this.numeroChiamate == undefined) {
            this.numeroChiamate = 0;
        }
        console.log("Chimate fatte: " + this.numeroChiamate);
        return this.numeroChiamate;
    };
    smartphone2.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log('chiamate azzerate: ' + this.numeroChiamate);
    };
    smartphone2.prototype.chiamata = function () {
        if (firts_user.conta == undefined) {
            firts_user.conta = 1;
            console.log(firts_user.conta);
            return firts_user.conta;
        }
        else {
            firts_user.conta++;
            console.log(firts_user.conta);
            return firts_user.conta;
        }
    };
    smartphone2.prototype.iniziaChiamata = function () {
        if (firts_user.check == null) {
            firts_user.check = setInterval(this.chiamata, 1000);
            return firts_user.check;
        }
    };
    smartphone2.prototype.finisciChiamata = function () {
        this.call(firts_user.conta);
        clearInterval(this.check);
        this.conta = undefined;
        this.check = null;
        this.numeroChiamate + 1;
    };
    return smartphone2;
}(smartphone));
var firts_user = new smartphone2(0, 0);
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
function aggiungiCifra(elemento) {
    var cifraCliccata = elemento.getAttribute("data-simbolo");
    document.getElementById("casellaInput").value += cifraCliccata;
}
function dlt() {
    document.getElementById("casellaInput").value = document.getElementById("casellaInput").value.substring(0, document.getElementById("casellaInput").value.length - 1);
}
var ricarica = document.getElementById("ricarica");
ricarica.addEventListener("click", function ricarica2() {
    var inputText = Number(document.getElementById("casellaInput").value);
    firts_user.credito += inputText;
    console.log(inputText);
    console.log("caricato", firts_user.credito);
    document.getElementById("casellaInput").value = "";
    return firts_user.credito;
});
