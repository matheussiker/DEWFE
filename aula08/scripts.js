const limparButton = document.getElementById('btn-limpar');

let contagem = 0;

function adicionarTarefa(){
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaDeTarefas = document.getElementById('lista_tarefas');
    const contador = document.getElementById('numTarefas');

    let tarefa = inputElement.value;
    let mensagem, mensagemCor;

    
    if (tarefasValidas(tarefa, contagem,limparButton)){
        let novaTarefa = document.createElement('li');
        mensagem = "Adicionado com sucesso!";
        mensagemCor = 'green'; 

       novaTarefa.textContent = tarefa;
       listaDeTarefas.appendChild(novaTarefa);
       contagem++;
       contador.textContent = 'Numero de tarefas: ' + contagem
       limparButton.classList.add('apparent')
       console.log(limparButton.classList)
    }
    else{
        mensagem = 'Tarefa invalida, redigite.';
        mensagemCor = 'red';
    }

    mensagemElement.textContent = mensagem
    mensagemElement.style.color = mensagemCor

    inputElement.focus();
    inputElement.value = '';
}

function tarefasValidas(tarefa){
    return tarefa.trim().length >=5;
}

function LimparTarefas(){
    const listaDeTarefas = document.getElementById('lista_tarefas');

    if (listaDeTarefas.children.length >=1){
        const contador = document.getElementById('numTarefas');
        const mensagemElement = document.getElementById('mensagem');

        listaDeTarefas.innerHTML = '';
        contagem = 0;
        contador.textContent ='Numero de tarefas: ' + contagem
        mensagemElement.textContent = 'Lista limpa!'
        mensagemElement.style.color = 'green'
        limparButton.classList.remove('apparent')
    }

}
