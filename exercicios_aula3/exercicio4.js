// 4.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `A área é igual a ${area}m² e o perímetro é igual a ${perimetro}m.`;
}

calcularAreaEPerimetro(2.25, 4) // Resultado: A área é igual a 9m² e o perímetro é igual a 12.5m.