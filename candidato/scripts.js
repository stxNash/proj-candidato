
class candidato{
    constructor(nomeCandidato,idadeCandidato,profissaoCandidato,telefoneCandidato,enderecoCandidato,cidadeCandidato){
        this.nomeCandidato = nomeCandidato;
        this.idadeCandidato = idadeCandidato;
        this.profissaoCandidato = profissaoCandidato;
        this.telefoneCandidato = telefoneCandidato;
        this.enderecoCandidato = enderecoCandidato;
        this.cidadeCandidato = cidadeCandidato;
    }
}

function mostraDados(){
    const formulario = document.querySelector("#formulario").children;

    let pessoa = new candidato();

    for (let i = 0; i < formulario.length; i++){
        let elemento = formulario.item(i)
        pessoa[elemento.id] = elemento.value;  
    }
    

    document.querySelector("#iddados").innerHTML = `Candidato ${pessoa.nomeCandidato} tem ${pessoa.idadeCandidato} anos, tem a profissão ${pessoa.profissaoCandidato}, número de telefone ${pessoa.telefoneCandidato}, endereço ${pessoa.enderecoCandidato} na cidade ${pessoa.cidadeCandidato}`

}

document.getElementById("form").addEventListener("submit", (e) => {
    mostraDados()
    e.preventDefault();
})