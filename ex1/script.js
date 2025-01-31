function conferirnum() {
    const numero = document.getElementById('numero').value;
    const mensagem = document.getElementById('mensagem');

    
    if (numero < 0 || numero > 100) {
        mensagem.textContent = 'O número deve estar entre 0 e 100.';
    } else {
        mensagem.textContent = 'Seu número: ' + numero;
    }
}