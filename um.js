let produtosExemplo = [
    {
        id: 1,
        modelo: "blusa do naruto",
        marca: "lacosta",
        categoria: "blusa"
    },
    {
        id: 2,
        modelo: "bermuda do naruto",
        marca: "lacosta",
        categoria: "bermuda"
    },
    {
        id: 3,
        modelo: "bandana do naruto",
        marca: "lacosta",
        categoria: "acessorios"
    }
]

let categoriaExemplo = 'acessorios';

function um(produtos, categoria) {
    return produtos.reduce((acumulador, produto) => {
        if (produto.categoria === categoria) {
            acumulador.push(produto);
        }
        return acumulador
    }, []);
}

console.log(um(produtosExemplo, categoriaExemplo))