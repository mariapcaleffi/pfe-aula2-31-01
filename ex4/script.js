function conferirnum() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 1) {
        mensagem.textContent = 'Insira um número inteiro positivo.';
        return;
    }

    const primos = [];
    let totalDivisoes = 0;

    for (let num = 2; num <= numero; num++) {
        let isPrimo = true;
        for (let i = 2; i * i <= num; i++) {
            totalDivisoes++;
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
            primos.push(num);
        }
    }

    if (primos.length > 0) {
        mensagem.textContent = `Números primos até ${numero}: ${primos.join(', ')}.`;
    } else {
        mensagem.textContent = `Não há números primos até ${numero}.`;
    }
    mensagem.textContent += ` Total de divisões realizadas: ${totalDivisoes}.`;
}