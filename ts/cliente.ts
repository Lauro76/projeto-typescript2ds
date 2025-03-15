namespace empresa{
    export class Cliente extends pessoa{
        private_codigo:number;
        private_saldo: number;
        
        get codigo(){
            return this.codigo;
        }

        set codigo(){
            this.codigo = codigo;
        }

        get saldo (){
            return this. saldo;
        }

        get saldo(saldo:number){
            this.saldo = saldo;
        }
        
    }
}