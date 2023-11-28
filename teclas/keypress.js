
addEventListener("keydown", function(press){
    if( !isNaN(press.key) || press.key == "/" || press.key == "-" || press.key == "+" || press.key == "*" || press.key == "Enter" || press.key == "Backspace"){
        if(press.key <= 9 || press.key == "/" || press.key == "-" || press.key == "+" || press.key == "*"){
            resposta.value = resposta.value + press.key;
        }
        else if( press.key == "Enter"){
            resposta.focus()
            if(resposta.value != ''){
                historico.value = resposta.value
                console.log(historico.value)
                resposta.value = eval(resposta.value)
            }
        }
        else if( press.key = "Backspace"){
            resposta.value = "";    
            historico.value = "";
        }
    }
})