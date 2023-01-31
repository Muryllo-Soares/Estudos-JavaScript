function check(){
    let preant = Number(prompt('Qual era o preço anterior do produto?'))
    let preatu = Number(prompt('Qual é o preço atual do produto'))
    let res = document.getElementById('res')
    let subiu = preatu-preant
    let abaixou = preant-preatu
    let variatu = (preant-preatu)/preatu*100
    let variant = (preatu-preant)/preant*100

    res.innerHTML = '<br> Analisando os valores informados'
    res.innerHTML += `<br><br> O produto custava R$${preant} e agora custa R$${preatu}`

    if(preant<preatu){
        res.innerHTML += '<br><br> Hoje o preço está mais caro.'
    }else{
        res.innerHTML += '<br><br> Hoje o preço está mais barato.'
    }

    if(preant<preatu){
        res.innerHTML += `<br><br> O preço subiu R$${subiu} em relação ao preço anterior.
        Uma variação de ${variatu}% pra baixo.`
        
    }else{
        res.innerHTML += `<br><br> O preço abaixou R$${abaixou} em relação ao preço anterior.`
        res.innerhtml += `<br><br> Uma variação de ${variant}% pra cima.`
    }

}