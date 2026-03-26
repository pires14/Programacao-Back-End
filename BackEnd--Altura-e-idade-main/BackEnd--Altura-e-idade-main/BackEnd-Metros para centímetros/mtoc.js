const calcular = document.getElementById('calcular');

function centrimetrosMetros(){ 
    const nome = document.getElementById('nome').value;
    const centimetros = document.getElementById('altura').value;
    const idade = document.getElementById('idade').value;
    const resultado = document.getElementById('resultado');


    if (nome !== '' && centimetros !== '' && idade !== '' ){
        const valorCentimetrosParaMetros = (centimetros/100).toFixed(2);

        let classificacao = '';
        if(valorCentimetrosParaMetros < 1 && idade < 10){
            classificacao = 'a sua altura está muito baixa para a sua idade';
        } else if(valorCentimetrosParaMetros < 1,2 && idade < 11){
            classificacao = 'a sua altura está baixa para a sua idade';
        } else if (valorCentimetrosParaMetros < 1,4 && idade < 12){
            classificacao = 'a sua altura está próxima da média para a sua idade';
        } else if (valorCentimetrosParaMetros < 1,6 && idade < 15){
            classificacao = 'a sua altura está na média para a sua idade';
        } else if (valorCentimetrosParaMetros < 1,8 && idade < 100){
            classificacao = 'a sua altura está alta para a sua idade';
        }else {
            classificacao = 'ATENÇÃO, VOCÊ PRECISA DE AJUDA';
        }
        resultado.textContent = `${nome}, sua altura em metros é ${valorCentimetrosParaMetros} , sua idade é ${idade} e  ${classificacao}`;


    } 
    else {
        resultado.textContent = 'É obrigatório preencher todos os campos';
    }


}
calcular.addEventListener('click', centrimetrosMetros);