document.getElementById('forms').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o envio padrão do formulário

    // Chama a função de cálculo
    soma();
    sub();
    div();
    mult();
    Poten();
});




function soma() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = ("Rsultado: " + (n1 + n2));
}

function sub() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = ("Rsultado: " + (n1 - n2));
}

function div() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = ("Rsultado: " + (n1 / n2));
}

function mult() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = ("Rsultado: " + (n1 * n2));
}

function Poten() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    document.getElementById('resultado').innerHTML = ("Rsultado 1: " + (n1 * n1) + "<br>" + "Resultado 2:" + (n2 * n2));
    
}