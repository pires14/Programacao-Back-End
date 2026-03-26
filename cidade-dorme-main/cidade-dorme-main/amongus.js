let imagens = ["impostor.png", "tripulante.png", "inocentevip.png"];

function jogar(){
    // Gerar números aleatórios entre 0 e 2
    let sorteio1 = Math.floor(Math.random() * 3);
    let sorteio2 = Math.floor(Math.random() * 3);
    let sorteio3 = Math.floor(Math.random() * 3);

    // Atribuir imagens aos elementos
    document.getElementById('img1').src = imagens[sorteio1];
    document.getElementById('img2').src = imagens[sorteio2];
    document.getElementById('img3').src = imagens[sorteio3];

    // Contar quantos impostores apareceram
    let impostores = 0;
    if (sorteio1 === 0) impostores++;
    if (sorteio2 === 0) impostores++;
    if (sorteio3 === 0) impostores++;

    // Lógica para o resultado baseado no número de impostores
    if (impostores === 1) {
        document.getElementById('resultado').innerHTML = "VOCÊ CONTINUA VIVO!!!";
    } else if (impostores === 2) {
        document.getElementById('resultado').innerHTML = "NÃO FOI DESSA VEZ, INFELIZMENTE VOCÊ MORREU!!";
    } else {
        document.getElementById('resultado').innerHTML = "VOCÊ CONTINUA VIVO!!!";
    }
}

function resetar(){
    document.getElementById('img1').src = "amongus.png";
    document.getElementById('img2').src = "amongus.png";
    document.getElementById('img3').src = "amongus.png";
    document.getElementById('resultado').innerHTML = "Resultado";
}