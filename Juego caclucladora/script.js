function suma() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultadoSuma").innerHTML = "El resultado es: " + resultado;
}

function resta() {
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var resultado = num3 - num4;
    document.getElementById("resultadoResta").innerHTML = "El resultado es: " + resultado;
}

function multiplicacion() {
    var num5 = parseFloat(document.getElementById("num5").value);
    var num6 = parseFloat(document.getElementById("num6").value);
    var resultado = num5 * num6;
    document.getElementById("resultadoMultiplicacion").innerHTML = "El resultado es: " + resultado;
}

function division() {
    var num7 = parseFloat(document.getElementById("num7").value);
    var num8 = parseFloat(document.getElementById("num8").value);
    var resultado = num7 / num8;
    document.getElementById("resultadoDivision").innerHTML = "El resultado es: " + resultado;
}

function calcularFunciones() {
    var num9 = parseFloat(document.getElementById("num9").value);
    var raizCuadrada = Math.sqrt(num9);
    var seno = Math.sin(num9);
    var coseno = Math.cos(num9);
    var tangente = Math.tan(num9);
    
    document.getElementById("resultadoRaizCuadrada").innerHTML = "La raíz cuadrada es: " + raizCuadrada;
    document.getElementById("resultadoSeno").innerHTML = "El seno es: " + seno;
    document.getElementById("resultadoCoseno").innerHTML = "El coseno es: " + coseno;
    document.getElementById("resultadoTangente").innerHTML = "La tangente es: " + tangente;
}

function calcularDerivada() {
    var expression = document.getElementById("expression").value;
    var variable = document.getElementById("variable").value;

    // Aquí puedes implementar el código para calcular la derivada
    
    var resultadoDerivada = "El resultado de la derivada es: ...";
    document.getElementById("resultadoDerivada").innerHTML = resultadoDerivada;
}

