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