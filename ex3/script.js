function conferirnum() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 1) {
        mensagem.textContent = 'Insira um número inteiro positivo.';
        return;
    }

    const isPrimo = (num) => {
        if (num <= 1) return false;
        const divisores = [];
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                divisores.push(i);
                if (i !== num / i) divisores.push(num / i);
            }
        }
        return divisores.length === 0 ? true : divisores;
    };

    const resultado = isPrimo(numero);
    if (resultado === true) {
        mensagem.textContent = `${numero} é primo.`;
    } else {
        mensagem.textContent = `${numero} não é primo. É divisível por: ${resultado.join(', ')}.`;
    }
}