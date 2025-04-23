export default class Pessoa
{
    nome;
    documento;

    constructor (nome, documento){
        this.nome = nome;
        this.documento = documento;
    }
    exibirInformacoes(){
        return `Nome: ${this.nome}, Documento: ${this.documento}`;
    }

}

let pessoa1 = new Pessoa("César", 848);
console.log(pessoa1.exibirInformacoes());


