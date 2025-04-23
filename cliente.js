import  Pessoa  from "./Pessoa.js";

class Cliente extends Pessoa {
    static clienteId = 0;
    id;
    veiculos;

    constructor(nome, documento, id, veiculos = []) {
        super(nome, documento);
        Cliente.clienteId += 1; // Aumenta o contador de id do cliente
        this.id = Cliente.clienteId; // cada novo cliente recebe um id diferente
        this.veiculos = veiculos;
    }
    exibirInformacoes(){
        return `Nome: ${nome}, Documento: ${documento}, ID: ${id}, Veículos: ${veiculos.length}`;
    }

}

let cliente1 = new Cliente("cesar", 200, 1, ["hb20", "cbr1000"]);

console.log(cliente1.exibirInformacoes());
//2. Cliente extends Pessoa
//> - id: number (único e incremental)
//> - veiculos: Veiculo[] — lista de veículos cadastrados para o cliente