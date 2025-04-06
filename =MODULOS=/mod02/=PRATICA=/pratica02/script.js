let tarefas = []

function adicionarTarefa(){
    //receber valor do input do usuário
    const inputTarefa = document.getElementById('inputTarefa')
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById('mensagem')

    //se o valor do input for vazio então vai mostrar uma mensagem de erro pra o usuário
    if (tarefa == ''){
        //mostra uma mensagem de erro
        let mensagemErro = 'Digite uma tarefa pra adicionar a sua lista'
        mensagem.textContent = mensagemErro
    } else {
        //mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = 'Tarefa adicionada com sucesso'
        mensagem.textContent = mensagemSucesso
        tarefas.push(tarefa)
        rendenrizarTarefa()
    }

    //limpa o input do usuário
    inputTarefa.value = ''
}

function rendenrizarTarefa(){
     //cria novo item (li) e insire na (lista ul)
    const listaTarefas = document.getElementById('listaTarefas')
    listaTarefas.innerHTML = ''

    /* for itens na lista
    1. item inicial (iterador)
    2. item final (condição)
    3. se vai de 1 em 1 elemento ou se pula
    */

    //for(iterador, condição e frequencia)
    let i = 0
    for (i; i < tarefas.length; i++){
        let novaTarefa = document.createElement('li')
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa)
    }
}