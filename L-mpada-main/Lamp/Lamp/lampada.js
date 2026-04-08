const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function brokenLamp(){
    lamp.src='./img/quebrada.jpg';
}
//-1 significa desligado
function ThisLampIsBroken(){
    return lamp.src.indexOf('quebrada')> -1
}
// se a lampada não estiver quebrada
function lampOn(){
    if(!ThisLampIsBroken()){
        lamp.src='./img/ligada.jpg';
    }
}
// se a lampada não estiver quebrada
function lampOff(){
    if(!ThisLampIsBroken()){
        lamp.src='./img/desligada.jpg';
    }

}

turnOn.addEventListener('click',lampOn);
turnOff.addEventListener('click',lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', brokenLamp);