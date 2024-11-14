// 2.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero) {
    if (numero === 0) {
        return 1
    }

    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

fatorial(4) // Resultado: 24
fatorial(0) // Resultado: 1