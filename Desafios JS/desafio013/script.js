function clicar(){
    let nome = prompt('Qual o nome do aluno?')
    let nota1 = Number (prompt(`Primeira nota de ${nome}`))
    let nota2 = Number(prompt(`Segunda nota de ${nome}`))
    let res = document.getElementById('res')
    let media = (nota1+nota2)/2
    
    

    if (media<=3){
        res.innerHTML += `O aluno <strong>${nome}</strong> tem a média <strong>${media}</strong> e está <strong>REPROVADO!</strong>`
    }else if(media>3 && media<=6){
        res.innerHTML = `O aluno <strong>${nome}</strong> tem a média <strong>${media}</strong> e está de <strong>RECUPERAÇÃO!</strong>`
    }else if(media>6){
        res.innerHTML = `O aluno <strong>${nome}</strong> tem a média <strong>${media}</strong> e está <strong>APROVADO!</strong>`
    }
}
