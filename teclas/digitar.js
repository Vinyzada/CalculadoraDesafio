var numeros = document.createElement('script');
numeros.src = 'teclas/numeros.js';
document.head.appendChild(numeros);

const resposta = document.querySelector("#digitados")
console.log(resposta)

um.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
dois.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
tres.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
quatro.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
cinco.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
seis.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
sete.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
oito.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
nove.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});
zero.addEventListener("click", function(){
    resposta.value = `${resposta.value + this.value}`
});