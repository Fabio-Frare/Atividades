
//========================= QUESTÃO 1 =========================

function verificar() {
    // Obtém o valor digitado pelo usuário
    var numero = parseInt(document.getElementById('numero').value);

    // Captura o campo de informação do resultado
    var resultadoElement = document.getElementById('resultado_fibonacci');

    // Verifica se a informação inserida pelo usuário é válida.
    if ( isNaN(numero) || numero < 0 ) {
        resultadoElement.textContent = 'Favor informar um número válido.'
    } else {
        // Função para verificar se o número pertence à sequência de Fibonacci
        var pertence = pertenceFibonacci(numero);

        // Exibe o resultado na página
        var positivo = `${numero} pertence à sequência de Fibonacci.`
        var negativo = `${numero} não pertence à sequência de Fibonacci.`
        resultadoElement.textContent = pertence ? positivo : negativo ;   
    }
  }
 
  // Verifica se um número pertence à sequência de Fibonacci 
function pertenceFibonacci(num) {

    // Casos base: os dois primeiros números da sequência
    if (num === 0 || num === 1) {        
        return true;
    }

    // Inicializando os dois primeiros números da sequência
    let a = 0;
    let b = 1;

    // Calculando os próximos números da sequência até encontrar um número maior ou igual ao número informado
    while (b <= num) {
        let temp = a + b;
        a = b;
        b = temp;

        if (b === num) {
        return true;
        }
    }  
    // Se não encontrar, o número não pertence à sequência
    return false;
}

// Limpa o campo informado pelo usuário e o texto informativo  
function limparCampoNumero() {
    document.getElementById('numero').value = ''
    document.getElementById('resultado_fibonacci').textContent = ''   
}

//========================= QUESTÃO 2 =========================

function contarLetrasA() {
    // Obtém o texto digitado pelo usuário
    var texto = document.getElementById("texto").value;

    // Converte todo o texto para minúsculas para facilitar a comparação
    var textoMinusculo = removerAcentos(texto.toLowerCase());

    // Conta a ocorrência da letra 'a' usando uma expressão regular
    var quantidade = textoMinusculo.match(/a/g)?.length || 0;

    // Exibe o resultado
    var resultado = document.getElementById("resultado_string");
    if (quantidade > 0) {
        resultado.textContent = `A letra 'a' aparece ${quantidade} vezes no texto.`;
    } else {
        resultado.textContent = "A letra 'a' não foi encontrada no texto.";
    }
}

// Remove acentos usando uma expessão regular
function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// Limpa o campo informado pelo usuário e o texto informativo  
function limparCampoString() {
    document.getElementById('texto').value = ''
    document.getElementById('resultado_string').textContent = ''   
}

//========================= QUESTÃO 3 =========================

var resultadoSoma = document.getElementById("resultado_soma");
var soma = 0;
function calcularSoma(indice) {    
    for (let k = 1; k < indice; k++) {
        soma += k;
    }
    resultadoSoma.textContent = 'O valor final de SOMA é:' + soma + "."
    return soma;
}

// Limpa o campo de texto informativo  
function limparCampoInfSoma() {
    document.getElementById("resultado_soma").textContent = ''   
}



