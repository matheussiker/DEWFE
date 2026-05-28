let contagem = 0;
function adicionarTarefa(){
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaDeTarefas = document.getElementById('lista_tarefas');
    const contador = document.getElementById('numTarefas');

    let tarefa = inputElement.value;
    let mensagem, mensagemCor;

    
    if (tarefasValidas(tarefa, contagem)){
        let novaTarefa = document.createElement('li');
        mensagem = "Adicionado com sucesso!";
        mensagemCor = 'green'; 

       novaTarefa.textContent = tarefa;
       listaDeTarefas.appendChild(novaTarefa);
       contagem++;
       contador.textContent = 'Numero de tareafas: ' + contagem
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

