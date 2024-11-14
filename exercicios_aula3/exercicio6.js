// 6.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero) {
    let contador = 1;
    let resultado = '';
    while (contador <= 10) {
        resultado += `${numero} * ${contador} = ${numero * contador}\n`;
        contador++;
    }
    return resultado; 
}

tabuada(5) // Retorna a tabuada completa de 5.