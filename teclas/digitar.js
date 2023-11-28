var numeros = document.createElement('script');
numeros.src = 'teclas/numeros.js';
document.head.appendChild(numeros);

const resposta = document.querySelector("#digitados")
const historico = document.querySelector("#historico")
// console.log(historico)
let equacao = ""
function adicionar(){
    if(resposta.value == "/" || resposta.value == "*" || resposta.value == "+" || resposta.value == "-" ){
        equacao = resposta.value
        resposta.value = ''
        console.log(equacao)
    }
    resposta.value = `${resposta.value + this.value}`
};

um.addEventListener("click", adicionar);
dois.addEventListener("click", adicionar);
tres.addEventListener("click", adicionar);
quatro.addEventListener("click", adicionar);
cinco.addEventListener("click", adicionar);
seis.addEventListener("click", adicionar);
sete.addEventListener("click", adicionar);
oito.addEventListener("click", adicionar);
nove.addEventListener("click", adicionar);
zero.addEventListener("click", adicionar);
ponto.addEventListener("click", adicionar);