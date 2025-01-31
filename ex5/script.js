let notas = [];

function adicionarNota() {
    const notaInput = document.getElementById('nota');
    const nota = parseFloat(notaInput.value);
    const mensagem = document.getElementById('mensagem');
    const listaNotas = document.getElementById('listaNotas');

    if (isNaN(nota) || nota < 0 || nota > 10) {
        mensagem.textContent = 'Por favor, insira uma nota válida entre 0 e 10.';
        return;
    }

    notas.push(nota);
    const li = document.createElement('li');
    li.textContent = `Nota ${notas.length}: ${nota}`;
    listaNotas.appendChild(li);
    notaInput.value = '';
    mensagem.textContent = `Nota adicionada! Total de notas: ${notas.length}`;
}

function calcularMedia() {
    const mensagem = document.getElementById('mensagem');

    if (notas.length === 0) {
        mensagem.textContent = 'Nenhuma nota foi adicionada.';
        return;
    }

    const soma = notas.reduce((acc, curr) => acc + curr, 0);
    const media = soma / notas.length;

    mensagem.textContent = `A média aritmética das notas é: ${media.toFixed(2)}`;
}