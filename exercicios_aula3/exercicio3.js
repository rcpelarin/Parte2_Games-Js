// 3.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function conversaoRealDolar(valorEmDolar) {
    let cotacaoDolar = 4.8;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return `R$ ${valorEmReais.toFixed(2)}`
}

conversaoRealDolar(250) //Resultado: R$ 1200,00