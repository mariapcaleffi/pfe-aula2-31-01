function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);
    let mensagem = document.getElementById('mensagem');

    let imc = peso / (altura * altura);

    if(imc < 18.5) {
        mensagem.innerHTML = `Você está abaixo do peso.`;
    } else if(imc > 18.5 && imc <= 24.9) {
        mensagem.innerHTML = `Você está com peso normal.`;
    } else if(imc > 25 && imc <= 29.9) {
        mensagem.innerHTML = `Você está com sobrepeso.`;
    } else if(imc > 30 && imc <= 34.9) {
        mensagem.innerHTML = `Você está com obesidade grau I.`;
    } else if(imc > 35 && imc <= 39.9) {
        mensagem.innerHTML = `Você está com obesidade grau II (severa).`;
    } else {
            mensagem.innerHTML = `Você está com obesidade mórbida (morbida).`;
     }

}