document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    // Pegando os dados do formulário
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.querySelector('input[name="sexo"]:checked')?.value;
    const data = document.getElementById('data').value;
    const numero = document.getElementById('numero').value;

    // Exibindo os resultados
    const resultadoDiv = document.getElementById('resultados');
    const resultText = `
        <strong>Nome:</strong> ${nome}<br>
        <strong>Senha:</strong> ${senha}<br>
        <strong>Idade:</strong> ${idade}<br>
        <strong>Sexo:</strong> ${sexo}<br>
        <strong>Data de Nascimento:</strong> ${data}<br>
        <strong>Número de Telefone:</strong> ${numero}
    `;

    document.getElementById('result').innerHTML = resultText;
    resultadoDiv.style.display = 'block';
});
