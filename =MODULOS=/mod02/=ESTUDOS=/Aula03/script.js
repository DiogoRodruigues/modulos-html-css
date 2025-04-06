function enviarDados(){
    //aqui onde vai obter os dados
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    //e aqui onde vai receber os dados
    const resultados = document.getElementById('resultados')
    resultados.innerHTML = `Nome: ${nome} <br>
    Senha: ${senha}`;
}