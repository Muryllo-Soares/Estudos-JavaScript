
/* podemos utilizar mais de um parametro para nossa function, porém se faltar algum valores para
esses parametros o JS coloca como undefund ou indefinido */

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 8))

//++++++++++++++++++++++++++++++++++++++++++++

/* para que não ocorra problema de undefund no parametro por falta de valor, podemos deixar pre definido
os valores dos parametros = 0, assim ele retorna somente o que foi definido pelo parametro real */

function somal (n1=0, n2=0) {
    return n1 + n2
}

let res = (somal(2, 4))
console.log(res)