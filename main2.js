var produtos = JSON.parse(localStorage.getItem('produtos'))


var tabela = document.getElementById('tabela')

for (i=0; i < produtos.length; i++) {
    var produto = produtos[i]
    var vprod = produto['NOME DO PRODUTO']
    var vtipo = produto['TIPO']
    var vun = produto['UNIDADE']
    var vqtdade = produto['QUANTIDADE INICIAL']
    var vserie = produto['Nº DE SERIE']
    var vcarac = produto['CARACTERISTICAS']

    var tr = tabela.insertRow(1)
    var td = [tr.insertCell(0),tr.insertCell(1),tr.insertCell(2),tr.insertCell(3),tr.insertCell(4),tr.insertCell(5)]

    td[0].innerHTML = vprod
    td[1].innerHTML = vtipo
    td[2].innerHTML = vun
    td[3].innerHTML = vqtdade
    td[4].innerHTML = vserie
    td[5].innerHTML = vcarac
}