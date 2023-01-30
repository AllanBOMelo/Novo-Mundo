var valor1 = document.getElementById('valor1');
var valor2 = document.getElementById('valor2');
var botao = document.getElementById('botao');
var resultado = document.getElementById('resultado');

botao.addEventListener('click', function() { multiplica(); } );

function multiplica() {
    var numero1 = parseInt(valor1.value);
    var numero2 = parseInt(valor2.value);
    var multiplicacao = numero1 * numero2;
    document.getElementById('resultado').value = multiplicacao;
}