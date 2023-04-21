console.log("javascript funcionando")

let txtOp1 = document.getElementById("op1")
let operar = document.getElementById("operacion")
let txtOp2 = document.getElementById("op2")
const btn = document.getElementById("calcular")
const pResult = document.getElementById("result")


btn.addEventListener('click', calcular)

function calcular(){
    // con ese console comprobando que el boton estaba funcionando 
    //console.log("boton funcionando")
    const operacion = operar.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"){
        let resultado;
        switch(operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-" :
                resultado = op1 - op2
                break;
            case "*" :
                resultado = op1 * op2
                break;
            case "/" :
                resultado = op1 * op2
                break;
        }
        pResult.innerText = resultado
    } else {
        pResult.innerText = "el operador no existe"
    }
}