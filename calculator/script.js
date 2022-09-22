function clicar(x) {
    var num = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = num + x;
}
function apagarTudo() {
    document.getElementById('resultado').innerHTML = "";
}
function apagar() {
    var apg = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = apg.substring(0,apg.length-1);
}
function calcular() {
    var calc = document.getElementById('resultado').innerHTML;
    if(calc) {
        document.getElementById('resultado').innerHTML = eval(calc);
    } else {
        document.getElementById('resultado').innerHTML = 'ERRO'
    }
}