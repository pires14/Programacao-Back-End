const calcular = document.getElementById('calcular');

function media(){ 
    const nome = document.getElementById('nome').value;
    const vitorias = document.getElementById('vitorias').value;
    const derrotas = document.getElementById('derrotas').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && vitorias !== '' && derrotas !== ''){
        const valorMedia = (vitorias/derrotas);

        let classificacao = '';
        if(valorMedia < 10){
            classificacao = 'O SEU TIME ESTÁ SENDO REBAIXADO!';

        } else if(valorMedia < 20){
            classificacao = 'O SEU TIME ESTÁ PERTO DO REBAIXAMENTO';
        } else if (valorMedia < 30){
            classificacao = 'O SEU TIME ESTÁ ENTRE OS 15 MELHORES';
        } else if (valorMedia < 40){
            classificacao = 'O SEU TIME ESTÁ ENTRE OS 10 MELHORES';
        } else if (valorMedia < 50){
            classificacao = 'PARABÉNS!! SEU TIME FOI CAMPEÃO';
        }else {
            classificacao = 'ATENÇÃO, SEU TIME PRECISA DE AJUDA';
        }
        resultado.textContent = `${nome}, sua média é ${valorMedia} e você está ${classificacao}`;


    } 
    else {
        resultado.textContent = 'É obrigatório preencher todos os campos';
    }


}
calcular.addEventListener('click', media);
console.log(media);