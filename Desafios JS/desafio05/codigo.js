function resultado(){
    let res = document.getElementById('res')
    let c = [1000, 100, 10]
    let m =Number(prompt('Digite uma distância em metros(m)'))
    
    if(m!=NaN){
        alert ('Você precisa digitar os números com ponto "."')
    }
    
    res.innerHTML =`<br><strong> A distância de ${m} metros, corresponde a...</strong>`
    
    res.innerHTML += `<br><br><br>${m/c[0]} quilômetros (Km)`
    res.innerHTML += `<br><br>${m/c[1]} hectômetros (Hm)`
    res.innerHTML += `<br><br>${m/c[2]} decâmetros (Dam)`
    res.innerHTML += `<br><br>${m*c[0]} decímetros (dm)`
    res.innerHTML += `<br><br>${m*c[1]} centímetros (cm)`
    res.innerHTML += `<br><br>${m*c[2]} milímetros (mm)`
}