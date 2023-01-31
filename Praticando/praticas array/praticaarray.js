
let valores = [32, 68, 6, 8, 12, 2, 4]
valores.sort((a, b) => a- b)
let soma = 0
let media = 0
let tot = valores.length
let maior = valores[0]
let menor = valores[0]

for (let pos in valores) {
    soma += valores[pos]
    if (valores[pos] > maior)
        maior = valores[pos]
    if (valores[pos] < menor)
        menor = valores[pos]
}
media = soma/tot
console.log(`A soma dos valores ${valores} é: ${soma}`)
console.log(`O total de numeros cadastrados é: ${valores.length}`)
console.log(`A media dos valores é: ${media}`)
console.log(`O maior valor digitado foi: ${maior}`)
console.log(`O menor valor digitado foi: ${menor}`)
