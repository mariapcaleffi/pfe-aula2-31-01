let numEleitores = 0;
let votosCandidato1 = 0;
let votosCandidato2 = 0;
let votosCandidato3 = 0;
let votosContados = 0;

function iniciarVotacao() {
    numEleitores = parseInt(document.getElementById('numEleitores').value);

    if (numEleitores <= 0 || isNaN(numEleitores)) {
        alert("Por favor, insira um número válido de eleitores.");
        return;
    }

    document.getElementById('numEleitores').disabled = true;
    document.querySelector('button').disabled = true;
    document.getElementById('votacao').style.display = "block";
}

function registrarVoto(candidato) {
    if (votosContados < numEleitores) {
        switch (candidato) {
            case 1:
                votosCandidato1++;
                break;
            case 2:
                votosCandidato2++;
                break;
            case 3:
                votosCandidato3++;
                break;
        }

        votosContados++;

        if (votosContados === numEleitores) {
            mostrarResultado();
        }
    }
}

function mostrarResultado() {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p>Resultado final da votação:</p>
        <p>Candidato 1: ${votosCandidato1} votos</p>
        <p>Candidato 2: ${votosCandidato2} votos</p>
        <p>Candidato 3: ${votosCandidato3} votos</p>
    `;
}