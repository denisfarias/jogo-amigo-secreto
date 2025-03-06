let amigos = []

function limparCampo() {
    let nomesEntrada = document.getElementById('amigo');
    nomesEntrada.value = '';
}


function adicionarAmigo(){
    let nomes = document.getElementById('amigo').value;

    if(nomes == ''){
        alert('Por favor, insira um nome.');
    } else if (amigos.includes(nomes)) {
        alert('Nome já adicionado!');
    } else{
        amigos.push(nomes);
        limparCampo();
        listaAmigos();
    }
}

function listaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let numeroListaAmigos = 0; numeroListaAmigos < amigos.length; numeroListaAmigos++){
        let li = document.createElement('li');
        li.textContent = amigos[numeroListaAmigos];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length < 2){
        alert('Ao menos 2 nomes precisam ser adicionados.');
        return;
    }

    let sorteioCode = Math.floor(Math.random() * amigos.length);
    let sorteio = amigos[sorteioCode];

    amigos.splice(sorteioCode, 1);

    let lista = document.getElementById('listaAmigos');
    let result = document.getElementById('resultado');

    lista.style.display = 'none'; 

    result.innerHTML = `O amigo secreto sorteado é: ${sorteio}`;
}


