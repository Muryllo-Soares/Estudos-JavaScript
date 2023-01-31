function verificar(){
    var num = document.getElementById("num").value
    var tab = document.getElementById("seltab")

    if (num.length == 0) {
        alert("[ERRO] Digite um número!")

    } else {
        let n = Number(num)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }

    }
}


