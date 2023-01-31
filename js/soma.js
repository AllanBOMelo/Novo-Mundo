var valor1 = document.getElementById('valor1');
var valor2 = document.getElementById('valor2');
var botaosoma = document.getElementById('botaosoma');
var botaosubtracao = document.getElementById('botaosubtracao');


botaosoma.addEventListener('click', function(){ somar(); });
botaosubtracao.addEventListener('click', function(){ subtrair(); });

function somar() {
    var numero1 = parseInt(valor1.value);
    var numero2 = parseInt(valor2.value);
    var soma = numero1 + numero2 ;

    document.getElementById('resultado').textContent = soma;
}

function subtrair() {
    var numero1 = parseInt(valor1.value);
    var numero2 = parseInt(valor2.value);
    var soma = numero1 - numero2 ;

    document.getElementById('resultado').textContent = soma;
}

/* resp.innerHTML += '<p>tag adicionada</p>' */
/* let res = document.querySelector('section#result') ; Seleciona tag "section" com id "result" 
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>'; substitui o conteudo por outra tag p
*/
/* let agora = new Date; pegar data
    let dia = agora.getday */