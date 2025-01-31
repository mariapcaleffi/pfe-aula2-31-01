let idades = [];

function adicionarIdade() {
    const idadeInput = document.getElementById('idade');
    const idade = parseInt(idadeInput.value);
    const resultado = document.getElementById('resultado');
    const listaIdades = document.getElementById('listaIdades');

    if (isNaN(idade) || idade < 0) {
        resultado.textContent = 'Por favor, digite uma idade válida.';
        return;
    }

    idades.push(idade);
    const li = document.createElement('li');
    li.textContent = `Idade: ${idade}`;
    listaIdades.appendChild(li);
    idadeInput.value = ''; 
    resultado.textContent = `Você adicionou ${idades.length} idades.`;
}

function calcularMedia() {
    const resultado = document.getElementById('resultado');

    if (idades.length === 0) {
        resultado.textContent = 'Nenhuma idade para calcular.';
        return;
    }

    let soma = 0;
    for (let i = 0; i < idades.length; i++) {
        soma += idades[i];
    }

    const media = soma / idades.length;
    let categoria;

    if (media >= 0 && media <= 25) {
        categoria = 'jovem';
    } else if (media > 25 && media <= 60) {
        categoria = 'adulta';
    } else {
        categoria = 'idosa';
    }

    resultado.textContent = `A média de idade é: ${media.toFixed(2)}. A turma é ${categoria}.`;
}