const produtos = []; // Array para simular um banco de dados

class Produto {
    static listar() {
        return produtos;
    }

static obterPorId(id){
    return produtos.find(produto => produto.id === id);
}

static criar(produto) {
    produto.id = produtos.length + 1; // Simula um ID único
    produtos.push(produto);
}

static atualizar(id, dadosAtualizados) {
    const index = produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
        produtos(index) = {...produtos(index), ...dadosAtualizados };
    }
}

static excluir(id){ 
    const index = produtos.findIndex(produto => produto,id ===id);
    if (index !== -1) {
        produtos.splice(index, 1);
    }
}
}

module.exports = Produto;