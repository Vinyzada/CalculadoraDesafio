var digitar = document.createElement('script');
numeros.src = 'teclas/digitar.js';
document.head.appendChild(digitar);

let AC = document.querySelector("#AC");

function limpar(){
    resposta.value = "";
    historico.value = "";
};
AC.addEventListener("click", limpar)