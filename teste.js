// João Victor Bernardo Pires- 08/04/2026
// 3°T.D.S
// N°13

//  1. Exiba a mensagem "Olá mundo" no console.

console.log("Olá Mundo");

// 2. Crie uma variável com o seu nome e exiba o valor no console.

let nome = "Felipe Lira de Oliveira";
console.log(nome);

// 3. Some dois números e exiba o resultado

let soma = 1 + 2
console.log(soma);

// 4. Subtraia 2 numeros e exiba o valor

let tira = 1-2;
console.log(tira);

// 5. Descubra o resto da divisão de um número por outro

let resto = 4%2;
console.log(resto)

// 6. Crie uma variável booleana (true false) e exiba seu valor

let kwdsa = true
console.log(kwdsa);

// 7.Verifique se  um número é maior que outro e exiba o resultado

let maiorQue = 18 < 21;
console.log(maiorQue);

// 8. Crie duas variaveis com algum valor e exiba a concatenação
let var1 = "Lucas";
let var2 = "Miguel";

console.log(`teste ${var1} ${var2}`);

// 9. Descubra o tipo de uma variável

let number = 10;
console.log(typeof(number)); // typeof mostra o tipo da variável

// 10. Converta numero para string.

let num1 = 10;
let num1String = String(num1);
console.log(typeof(num1String));
console.log(num1String);

// 11. String para numero

let texto = "123";
let textoNumber = Number(texto);
console.log(typeof(textoNumber));
console.log(Number(texto));

// laços de repetição

//12. Exiba no console de 0 a 10

for (let i = 0; i <= 10; i++) {
    console.log(i);
};

// 13. Exiba apenas numeros pares até 20.

for (let i = 0; i <= 20; i+=2){
    console.log(i)
};

// 14. Mostre no coonsole numero de 10 até 1

for ( let i = 10; i >=1; i--){
    console.log(i)
};

// 15. Some Numeros de 1 a 5.
let somaLoop = 0;
for (let i = 1; i<=5; i++){
    somaLoop+=i;
    console.log("Valor de i " +i+ " Valor de somaLoop " +somaLoop);
}

console.log(somaLoop);

// 16. Faça a tabuada do 3

for (let i = 1; i <= 10; i++) {
    console.log("3 x " + i + " = " + 3*i);
}

// do 9
let sominha = 0;
for (let i = 1; i <= 10; i++) {
    sominha = 9 * i;
    console.log("9 x " + i + " = " + sominha);
}

// 17.Conte quantos números são maiores que 5

let lista = [2,6,8,1,3];
let cont = 0;
for (let i =0; i<lista.length;i++ ){
    if(lista[i] > 5)cont++;
}
console.log(cont);


// 18.Percorra a string letra por letra
let palavra = "JKRMN";
for (let i =0; i<palavra.length;i++){
    console.log(palavra[i]);
}

// 19. Para um loop quando encontrar o numero 7 de 0 a 10

for ( let i = 0; i <=10; i++){
    if(i===8)break;
    console.log(i)
};

// 20. Crie uma função que exibe uma mensagem qualquer

function mensagem(){
    console.log("OI");
}
mensagem()

// 21. Função que multiplica 2 números

function multiplicar(a,b){
    return a * b;
}
console.log(multiplicar(2,3));

//22. Crie uma função que verifica se é par ou impar 

function verificar(num){
    return num % 2 ===0 ? "par" : "impar";
}
console.log(verificar(2));

//23. Crie uma função que retorne o dobro

function dobro(numerodigitado){
    return numerodigitado * 2;
}
console.log(dobro(2));

//24. Crie uma função que some elementos de um array

function somaArray(arr){
    total = 0;
    for (let i =0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(somaArray([2,2,2]));

//25. Verifique se o número 15 é positivo e exiba uma mensagem
num1 = 15
if (num1 >= 0) {
    console.log(`O número ${num1} é positivo`);
}
else{
    console.log(`O numero ${num1} é negativo`);
}
//26. Verifique se uma pessoa com 17 anos é maior de idade

let idade = 17

if (idade >=18){
    console.log("Maior de Idade");
}
else{
    console.log("Menor de idade");
}

nota = 7.5;
media = 6.0;

if (nota >= media){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}

// Atividades com Array

// 27. Crie um array com os numeros 10,20,30,40 e exiba todos os valores

let arr = [10,20,30,40];
console.log(arr);

// 28.Crie um array com 5 frutas e exiba a primeira fruta

let frutas = ["banana", "maça", "pera", "uva", "acerola"];
console.log(frutas[0])

// 29. Adicione o número 50 no final do array [10,20,30,40]

let arr2 = [10,20,30,40];
arr.push(50);
console.log(arr);

// 30. Remove o ultimo elemento do array [1,2,3,4,5]

let numeros = [1,2,3,4,5];
numeros.pop();
console.log(numeros);

//31. Exiba quantos elementos tem o array [5,10,15,20]

let array = [5,10,15,20]
console.log(`O array tem ${array.length} elementos.`);

// 32. Some todos os número do array [2,4,6,8]
let soma_num = 0;
let array_num = [2,4,6,8];
for (let i = 0; i < array_num.length; i++){
    soma_num = soma_num + array_num[i];
}
console.log(soma_num);

// 33: Multiplique cada elemento do array [1, 2, 3, 4] por 2
let multiplica = 1;
let array_mult = [1,2,3,4];
for(let i = 0; i < array_mult.length; i++){
    multiplica = multiplica * array_mult[i];
}
console.log(multiplica);

// 34: Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]

// 35: Exiba um por um os elementos do array ["azul", "verde", "amarelo"]

// 36: Exiba o último elemento do array [100, 200, 300, 400, 500]