function addLinha(){
    let tabela = document.querySelector('#infoTable')
    let linha = document.createElement('tr')
    let coluna1 = document.createElement('td')
    let coluna2 = document.createElement('td')
    coluna1.textContent = 'João'
    coluna2.textContent = '25'
    linha.appendChild(coluna1)
    linha.appendChild(coluna2)
    tabela.appendChild(linha)
}

function mudarConteudo(){
    let contentDiv = document.getElementById("content")
    let titulo = document.querySelector('h2')

    titulo.textContent = 'Conteúdo Atualizado'

    let paragrafo = document.createElement('p')

    paragrafo.textContent = 'Este é um novo paragrafo adicionado.'
    contentDiv.appendChild(paragrafo)


}

function adicionarBloco(){
    let novaDiv = document.createElement('div')
    novaDiv.innerHTML = `
        <p>este é um novo paragrafo</p>
    `;
    document.getElementById('content').appendChild(novaDiv);
}

function removerBloco(){
    const paragrafo = document.querySelector('#content p')
    paragrafo.remove();
}