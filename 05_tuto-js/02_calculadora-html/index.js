//console.log("script cargado");

const txtOp1 = document.getElementById("op1");
const txtOperacion = document.getElementById("operador");
const txtOp2 = document.getElementById("op2");   
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

btnCalcular.addEventListener("click", calcular);

function calcular() {
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    // Validación de entradas
    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)) {
        let resultado;

        switch (operacion) {
            case "+":
                resultado = op1 + op2;
                break;
            case "-":
                resultado = op1 - op2;                
                break;
            case "*":
                resultado = op1 * op2;                
                break;
            case "/":
                if (op2 !== 0) { // Verifica división por cero
                    resultado = op1 / op2; // Corrección: división
                } else {
                    pResultado.style.color = "red";
                    pResultado.style.backgroundColor = "transparent"; // Fondo transparente para errores
                    pResultado.innerText = "Error: División por cero";
                    return;
                }
                break;
        }

        // Cambiar el color del resultado según su valor
        if (resultado >= 0) {
            pResultado.style.color = "blue"; // Azul para resultados positivos o cero
            pResultado.style.backgroundColor = "green"; // Fondo verde para resultados positivos o cero
        } else {
            pResultado.style.color = "red"; // Rojo para resultados negativos
            pResultado.style.backgroundColor = "transparent"; // Fondo transparente para resultados negativos
        }

        pResultado.innerText = "= " + resultado;      
    } else {
        pResultado.style.color = "red";
        pResultado.style.backgroundColor = "transparent"; // Fondo transparente para errores
        pResultado.innerText = "Cálculo Imposible";
    }
}