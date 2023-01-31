/*
let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7, 1)
num.sort()
console.log (num)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro valor do vetor é um ${num[0]}`)


for (let cont = 0; cont < num.length; cont++){
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
} 
*/




let num = [2, 8, 6, 7, 14, 18, 25, 22]
num.sort((a, b)=> a - b)
// Posição 0  1  2  3  4  5  6  7  8  9


for (let cont in num) {
    console.log(`A posição ${cont} tem o valor ${num[cont]}`)
}    
let pos = num.indexOf(35)
if (pos == -1) {
    console.log("Valor não encontrado!")

} else {
    console.log(`o valor esta na posição ${pos}`)
}
console.log (`O vetor tem ${num.length} posições`)

