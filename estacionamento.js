class Pessoa {
    #nome;
    #documento;

    constructor (nome, documento){
        this.#nome = nome;
        this.#documento = documento;
    }
    exibirInformações(){
        return `Nome: ${this.nome}, Documento: ${this.documento}`;
    }

}
    class Cliente extends Pessoa{
        #id;
        #veiculos;
        constructor(nome, documento, id, veiculos){

        }
}
