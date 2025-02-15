"use strict";
var empresa;
(function (empresa) {
    class pessoa {
        get Nome() {
            return this._nome;
        }
        set nome(nome) {
            this._nome = nome;
        }
        get anoNasc() {
            return this._anoNasc;
        }
        set anoNasc(anoNasc) {
            this._anoNasc = anoNasc;
        }
        calcularidade(anoAtual) {
            return anoAtual - this.anoNasc;
        }
    }
})(empresa || (empresa = {}));
