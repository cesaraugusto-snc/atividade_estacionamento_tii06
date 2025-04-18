import  Pessoa  from "./Pessoa.js";

class Cliente extends Pessoa {
    static clienteId = 0;
    id;
    veiculos;
    constructor(nome, documento, id, veiculos = []) {
        super(nome, documento);
        this.id = clienteId;
        this.veiculos = veiculos;
    }

    clienteId = + 1;


    exibirInformações() {
        return `Nome: ${nome}, Documento: ${documento}, ID: ${id}, Veículos: ${veiculos.length}`;
    }

}
//2. Cliente extends Pessoa
//> - id: number (único e incremental)
//> - veiculos: Veiculo[] — lista de veículos cadastrados para o cliente