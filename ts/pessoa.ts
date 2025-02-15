namespace empresa{
   export class pessoa{
        private _nome:string;
        private _anoNasc:number;

        public get Nome(){
            return this._nome;


        }

        set nome(nome:string){
            this._nome=nome;
        }

        get anoNasc(){
            return this._anoNasc;
        }

        set anoNasc(anoNasc:number){
            this._anoNasc = anoNasc;

        } 

        public calcularidade(anoAtual:number){
            return anoAtual - this.anoNasc;
        }

    }
}