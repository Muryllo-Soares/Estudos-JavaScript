let altura= [1.60, 2.0, 1.75, 1.80, 1.52]
altura.sort()
let sexo = ''
let maior = altura[0]
let menor = altura[0]

for(let pos in altura){
    if(altura[pos] > maior)
    maior = altura[pos]
    if(altura[pos] < menor)
    menor = altura[pos]
    if(altura[pos] > 1.52){
        sexo = 'feminino'
    }else {
        sexo = 'masculino'
    }
    
   
}




console.log(`A maior altura é ${maior} metros, do sexo ${sexo}`)