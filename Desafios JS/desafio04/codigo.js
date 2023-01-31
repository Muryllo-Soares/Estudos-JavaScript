function comprar(){
    let produto = prompt('que produto você está comprando?')

    let valor = Number(prompt(`Quanto custa ${produto} que você está comprando?`))
    
    let pagamento = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}`))

    let troco = pagamento - valor

    alert (`Você comprou ${produto} que custou R$${valor}.
    Deu R$${pagamento} em dinheiro e vai reber R$${troco} de troco.
    Volte sempre!`)

}