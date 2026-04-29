console.log("Exercício 1: Mostrar Elementos\n");
//Essas chaves servem para abrir e fechar escopo.
{
let numeros = [1,2,3,4];
console.log("Usando o for:");
for(let i = 0; i < numeros.length; i ++){
    console.log(numeros[i]);
}
console.log("Usando o forEach:")
numeros.forEach(function(n){
    if(n % 2 == 0){
    console.log(n);
    }
    
});

console.log("for Each arrow (modo seta):");
numeros.forEach(n => console.log(n));
}
// O forEach percorre o arreio, o que foi percorrido vira o n.
