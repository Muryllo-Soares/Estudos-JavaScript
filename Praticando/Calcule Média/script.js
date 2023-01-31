function calcular() {
    //referencias do HTML para as variaveis do nome do aluno, provas, trabalhos, atividades e projeto.//
    let nAluno = document.getElementById("txtal").value
    let prova1 = document.getElementById("txtp1").value
    let prova2 = document.getElementById("txtp2").value
    let atividade1 = document.getElementById("txtat1").value
    let atividade2 = document.getElementById("txtat2").value
    let trabalho1 = document.getElementById("txttrab1").value
    let trabalho2 = document.getElementById("txttrab2").value
    let projeto = document.getElementById("txtpro").value
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    //referencias do HTML para as variaveis de peso das provas, trabalhos, atividades e projeto.//
    let pepro1 = document.getElementById("txtpe1").value
    let pepro2 = document.getElementById("txtpe2").value
    let peati1 = document.getElementById("txtati1").value
    let peati2 = document.getElementById("txtati2").value
    let petrab1 = document.getElementById("txttra1").value
    let petrab2 = document.getElementById("txttra2").value
    let peproj = document.getElementById("txtproj").value
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

    //Convertendo as referencias HMTL em variais utilizaveis para logica//
    let aluno = String(nAluno)
    let notas = [prova1, prova2, atividade1, atividade2, trabalho1, trabalho2, projeto];
    let pesos = [pepro1, pepro2, peati1, peati2, petrab1, petrab2, peproj]
    
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
    
    let sprova1 = (notas[0]*pesos[0])/100
    let sprova2 = (notas[1]*pesos[1])/100
    let sativ1 = (notas[2]*pesos[2])/100  
    let sativ2 = (notas[3]*pesos[3])/100
    let strab1 = (notas[4]*pesos[4])/100 
    let strab2 = (notas[5]*pesos[5])/100
    let sproj = (notas[6]*pesos[6])/100
    let media = (sprova1+sprova2+sativ1+sativ2+strab1+strab2+sproj)
    
    if (notas == '' || pesos == '' || aluno == '') {
        alert ("[ERRO] Você esqueceu de preencher alguma informação!") 
    }if ( media < 70) {
        res.innerHTML = `O Aluno(a) <strong>${aluno}</strong> Não obteve a <strong>MÉDIA</strong> igual ou superior 70!`
    }else {
        res.innerHTML = `O  Aluno(a) <strong>${aluno}</strong> obteve a <strong>MÉDIA</strong> de <strong>${media}</strong>, parabéns!`
    }

}



