function ponto(input) {
    if ((input.value).length == 3) {
        input.value += ".";
    }
}

var produtos = JSON.parse(localStorage.getItem('produtos'));

if (produtos == null) {
    produtos = []
}

function evento(e) {

    produtos.push({
        'NOME DO PRODUTO': document.getElementById('prod').value,
        'TIPO': document.getElementById('tipo').value,
        'UNIDADE': document.getElementById('un').value,
        'QUANTIDADE INICIAL': document.getElementById('qtdade').value,
        'Nº DE SERIE': document.getElementById('serie').value,
        'CARACTERISTICAS': document.getElementById('carac').value
    });

    var produtos_json = JSON.stringify(produtos)
    localStorage.produtos = produtos_json
}
