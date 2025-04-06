function addTarefa(){
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

        //cria novo item (li) e insire na (lista ul)
        const listaTarefas = document.getElementById('listaTarefas')
        let novaTarefa = document.createElement('li')
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)
    }

    //limpa o input do usuário
    inputTarefa.value = ''
}

window.alert('oi')
window.confirm('confirme se é OK!')
window.prompt('seu nome')