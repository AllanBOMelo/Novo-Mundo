var valor1 = document.getElementById('valor1');
var valor2 = document.getElementById('valor2');
var botao = document.getElementById('botao');

botao.addEventListener('click', function(){ dividir();} );

function dividir() {
    var numero1 = parseInt(valor1.value);
    var numero2 = parseInt(valor2.value);

    var dividido = numero1 / numero2;
    var resto = numero1 % numero2;

    

    document.getElementById('resultado').textContent = Math.trunc(dividido) + " | " + resto;
}