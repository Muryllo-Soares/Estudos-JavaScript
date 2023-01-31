function clicou(){
    let temp = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    let res = document.getElementById('res')
    if (temp == '' || temp!=NaN){
        alert ('favor informar um valor')
    }else{
    res.innerHTML = `<p>A temperatura de ${temp}°C, corresponde a...</p>`
    res.innerHTML += `${temp+273.15}°K (Kelvin)`
    res.innerHTML += `<p>${(temp*9/5)+32}°F (Fahrenheit)</p>`
}
    }
    