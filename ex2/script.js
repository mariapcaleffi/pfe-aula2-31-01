function conferirnum() {
    const numero = parseInt(document.getElementById('numero').value);
    const mensagem = document.getElementById('mensagem');

    
    if (isNaN(numero) || numero < 1) {
        mensagem.textContent = 'Insira um número inteiro positivo.';
        return;
    }

    
    const isPrimo = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    
    mensagem.textContent = isPrimo(numero) ? `${numero} é primo.` : `${numero} não é primo.`;
}