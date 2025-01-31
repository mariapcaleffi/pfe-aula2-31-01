function calcularMedia() {
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, insira ambas as notas!");
        return;
    }

    let media = (nota1 + nota2) / 2;
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove("aprovado", "reprovado", "distinguir");

    if (media === 10) {
        resultadoDiv.innerHTML = `Média: ${media.toFixed(2)} - Aprovado com Distinção!`;
        resultadoDiv.classList.add("distinguir");
    } else if (media >= 7) {
        resultadoDiv.innerHTML = `Média: ${media.toFixed(2)} - Aprovado!`;
        resultadoDiv.classList.add("aprovado");
    } else {
        resultadoDiv.innerHTML = `Média: ${media.toFixed(2)} - Reprovado!`;
        resultadoDiv.classList.add("reprovado");
    }
}