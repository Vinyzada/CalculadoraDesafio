var numeros = document.createElement('script');
numeros.src = 'teclas/numeros.js';
document.head.appendChild(numeros);

var digitar = document.createElement('script');
numeros.src = 'teclas/digitar.js';
document.head.appendChild(digitar);

let valores = []

function adicionarE(){
    valores.push(Number(resposta.value))
    resposta.value = ''
    resposta.value = `${resposta.value + this.value}`
}

function realizar(){
    valores.push(Number(resposta.value))
    switch (equacao) {
        case "-": resposta.value = `${valores[valores.length-2] - valores[valores.length-1]}`; break;
        case "+": resposta.value = `${valores[valores.length-2] + valores[valores.length-1]}`; break;
        case "*": resposta.value = `${valores[valores.length-2] * valores[valores.length-1]}`; break;
        case "/": resposta.value = `${valores[valores.length-2] / valores[valores.length-1]}`; break;
    }
    historico.value = `${valores[valores.length-2]} ${equacao} ${valores[valores.length-1]}`;
}

dividir.addEventListener("click", adicionarE);
multiplicar.addEventListener("click", adicionarE);
somar.addEventListener("click", adicionarE);
diminuir.addEventListener("click", adicionarE);
igual.addEventListener("click", realizar);
