let cot = Number((prompt `Antes de mais nada. Quanto está a cotação do dólar agora?`)) 
function converte(){
    let res = document.getElementById('res')
    let reais = Number(prompt('Quantos R$ você tem na carteira?'))
    let dol = reais/cot

    res.innerHTML = `<br>Você vai conseguir comprar <strong>US$${dol.toFixed(2)}</strong> dólares com os <strong>R$${reais}</strong> que tem na carteira, considerando a cotação atual!`
}