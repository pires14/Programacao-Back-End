function jogar(){
    if(document.getElementById('pedra').checked == false && document.getElementById('papel').checked == false && document.getElementById('tesoura').checked == false){
        alert("É obrigatório selecionar uma função")
    }
    else{
        //Math random vai sortear algo aleatório de 0 a 2
        // Math floor reduz/arredonda pra um número inteiro
        let sorteio = Math.floor(Math.random()*3)

        switch(sorteio){
            case 0 : 
                document.getElementById('pc').src="pcpedra.png";
                break
            
            case 1 : 
                document.getElementById('pc').src="pcpapel.png";
                break
            
            case 2 : 
                document.getElementById('pc').src="pctesoura.png";
                break
            }
            if ((document.getElementById('pedra').checked == true && sorteio ==0)
                ||(document.getElementById('papel').checked == true && sorteio ==1)
            ||(document.getElementById('tesoura').checked == true && sorteio ==2))
            
            {
                    document.getElementById('placar').innerHTML="Empate";
            }
            else if((document.getElementById('pedra').checked == true && sorteio == 2)||
            (document.getElementById('papel').checked == true && sorteio == 0)||
            (document.getElementById('tesoura').checked == true && sorteio == 1))
            {
                    document.getElementById('placar').inertHTML = "Você venceu!!";
            }
            else{
                    document.getElementById('placar').innerHTML="Computador venceu!";
            }
        }
    }
function resetar(){
    document.getElementById('pc').src="pc.png";
    document.getElementById('placar').innerHTML="Escolha e jogue";
}
    if('serviceWorker' in navigator){
        window.addEventListener('load',()=>{
            navigator.serviceWorker.register('sw.js').then(()=>console.log('Service Worker registrado')).catch(err=> console.log('Erro',err));});
    }