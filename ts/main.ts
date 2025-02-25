namespace empresa{

    const calc = document.getElementById("calc") as HTMLButtonElement;
    const campoNome = document.getElementById("campoNome") as HTMLInputElement;
    const campoAno = document.getElementById("campoAno") as HTMLInputElement;

    calc.addEventListener("click" , ()=>{
        let p = new pessoa();
        p.nome =" augusto";
        p.anoNasc = 1975;

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
    });    

}