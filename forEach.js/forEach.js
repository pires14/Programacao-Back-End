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

//Mostre todos os valores no terminal:
//dados do array
//let frutas["Maçã","Banana","Uva","Abacate"]
//utilizar forEach função anônima e função arrow.

console.log("Usando forEach função anônima: ")
let frutas = ["Maçã","Banana","Uva","Abacate"];
frutas.forEach(function(n){
    console.log(n);
})
console.log("\nUsando função arrow: ")
frutas.forEach(n => console.log(n));

// Some todos os valores e mostre o resultado
//preços 10,30,50,60
console.log("Usando arrow function para somar:")
let precos = [10,30,50,60];
let soma = 0;
precos.forEach(b => soma += b);
console.log(`A soma é: ${soma}.\n`)
console.log("Usando for para somar:")

let precosFor = [10,30,50,60];
let somaFor = 0;
for(let i=0; i < precosFor.length;i++){
    somaFor+= precosFor[i];
}
console.log(`A soma é: ${somaFor}.\n`);

console.log(`Exercício de pares:\n`)

let numeros = [1,2,3,4,5,6,7,8];
console.log(`Usando for:`)
for(let i = 0; i < numeros.length; i++){
    if(numeros[i]%2 ===0) console.log(numeros[i]);
}


console.log(`Usando arrow function:`);
let numerosPar = [1,2,3,4,5,6,7,8];
numerosPar.forEach(n => {
    if(n%2 ===0) console.log(n)
});
