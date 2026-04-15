// 1. Exiba a mensagem "Olá Mundo no console"
console.log("Olá Mundo");

// 2. Crie uma variável com seu nome e exiba o console.

let nome = "João";
console.log(nome);

// 3. Some dois números e exiba o resultado
let soma = 10+12;
console.log(soma);

// 4. Subtraia dois números e exiba o valor.
let sub = 10-2;
console.log(sub);

// 5. Descubra o resto da divisão um número por outro
let resto = 2%2;
console.log(resto);

// 6. Crie uma variável booleana (true false) e exiba seu valor
let bu = true;
console.log(bu);

// 7. Verifique se um número é maior que outro e exiba o resultado
let num1 = 1;
let num2 = 2;

if(num2 > num1){
    console.log("É maior");
}
//ou:

let maiorQue = 10>9;
console.log(maiorQue);

// 8. Crie duas variáveis com algum valor e exiba a concatenação.
let nome2 = "Pires";
let idade = 17;
console.log(`Meu nome é ${nome2} e tenho ${idade} anos`);

// 9. Descubra o tipo de uma variável
console.log(typeof nome2); // typeof mostra o tipo da variável
console.log(typeof idade);

// 10. Converta um numero para string
let numero = 5;
console.log(String(numero));

// 11. String para número
let texto = "123";
console.log(Number(texto));

// Lações de repetição

// while faz algo enquanto for verdadeiro, se não for verdadeiro ele para.

// 12. Exiba no número de 0 a 10;
for(let i = 0; i <=10; i++){
    console.log(i);
}

// 13. Exiba apenas números pares até 20.
for(let i = 0; i <=20; i +=2){
    console.log(i);
}

// 14. Mostre no console, números de 10 até 
for(let i = 10; i >0; i--){
    console.log(i);
}

// 15. Some numeros de 1 a 5.
let somaLoop = 0;
for(let i = 1; i<=5; i++){
    somaLoop+=i;
    console.log("valor de i " + i + " valor de somaLoop " + somaLoop);
}
console.log(somaLoop);

// 16. Faça a tabuada do 3.
console.log("Tabuada do 3:")
for(let i = 1; i <= 10; i++){
    console.log("3 x " + i + " = " +3*i);
}

// 17. Conte quantos números são maiores que 5
let lista = [2,6,8,1,3];
let cont = 0;
for(let i = 0; i < lista.length; i++){
    if(lista[i] >5)cont++;
    }
console.log(`O total de números maiores que 5 é: ${cont}`);

// 18. Percorra a string letra por letra.
let palavra = "JFRS";
for(i = 0; i < palavra.length; i++){
    console.log(palavra[i]);
}

// 19. Pare um loop quando encontrar o número 7 de 0 a 10;
for(let i = 0; i <10; i++ ){
    if(i===8)break;
    console.log(i);
}

// 20. Crie uma função que exibe uma mensagem.
function exibe(){
    console.log("Hello, guys");
}
exibe();

// 21. Crie uma função que multiplica dois números.
function multiplica(a,b){
    return a*b;
}
console.log(multiplica(54,63));

// 22. Crie uma função que verifica se é par ou ímpar
function verificar(num){
    return num % 2 === 0 ? "par" : "impar"; //ternário
} 
console.log(verificar(2));

// 23. Crie uma função que retorne o dobro
function dobro(a){
    return a * 2;
}
console.log(dobro(2));

// 24. Crie uma função que some elementos de um array

function soma(arr){
    total = 0;
    for(let i = 0; arr.length; i++){
        total += arr[i];        
    }
    return total;
}
console.log(soma([1,2,3]));

// 25. Verifique se o número 15 é positivo e exiba uma mensagem.
let num = 15;
if(num > 0){
    console.log(`O ${num} é positivo`);
}
else{
    console.log(`O ${num} é negativo`);
}

// 26. Verifique se uma pessoa de 17 anos é maior de idade
let idade17 = 17;
if(idade17 >=18){
    console.log("É maior de idade.");
}
else{
    console.log("É menor de idade.");
}

// 27. Crie um array com os números 10,20,30,40 e exiba todos:
let array = [10,20,30,40];
console.log(array);

// 28. Crie um array 5 frutas e exiba a primeira fruta:
let array_frutas = ["Banana", "Morango", "Maçã", "Uva", "Limão"];
console.log(array_frutas[0]);

// 29. Adiciona o número 50 no final do array [10,20,30,40]
let array2 = [10,20,30,40];
array2.push(50);
console.log(array2);

// 30. Remova o último elemento do array [1,2,3,4,5]
let array_1_5 = [1,2,3,4,5];
array_1_5.pop();
console.log(array_1_5);

// 31. Exiba quantos elementos tem o array [5,10,15,20]
let numeros = [5,10,15,20];
console.log(numeros.length);