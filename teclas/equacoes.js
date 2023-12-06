var digitar = document.createElement('script');
numeros.src = 'teclas/digitar.js';
document.head.appendChild(digitar);

function realizar(){
    historico.value = resposta.value;
    resposta.value = eval(resposta.value)
}

dividir.addEventListener("click", adicionar);
multiplicar.addEventListener("click", adicionar);
somar.addEventListener("click", adicionar);
diminuir.addEventListener("click", adicionar);
igual.addEventListener("click", realizar);
