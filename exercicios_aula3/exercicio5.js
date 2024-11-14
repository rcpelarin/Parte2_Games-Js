// 5.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaCircular(raio) {
    let areaCirculo = 3.14*(raio**2);
    return `A área da sala circular é ${areaCirculo}m²`
}

calcularAreaCircular(5); // Resultado: A área da sala circular é 78.54m²