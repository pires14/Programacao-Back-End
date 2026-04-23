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
let array_mult = [1,2,3,4];
let multiplica_lista = [];
for(let i = 0; i< array_mult.length; i++)
    multiplica_lista.push(array_mult[i] * 2);
console.log(multiplica_lista);

// 34: Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]
let array_frutas = ["maçã","banana", "uva"]
let procura = "laranja";
let existe = false;
for(let i = 0; i < array_frutas.length; i++){
    if(array_frutas[i] == procura){ 
        existe = true;
    }
}if(existe){ //Só executa se for verdadeiro
    console.log(`${procura} foi encontrada.`)
}else{
    console.log(`${procura} não foi encontrada.`)
}
// 35: Exiba um por um os elementos do array ["azul", "verde", "amarelo"]
let cores = ["azul", "verde", "amarelo"]
for(let i = 0; i < cores.length; i++){
    console.log(cores[i]);
}
// 36: Exiba o último elemento do array [100, 200, 300, 400, 500]
let numeros1 = [100,200,300,400,500]
console.log(numeros1[4])
// ou:
let numeros2 = [100,200,300,400,500];
let ultimoIndice = numeros2.length -1;
console.log(`O último elemento é: ${numeros2[ultimoIndice]}`);

// ==================== ATIVIDADES COM MATRIZ ====================

// 41: Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda
let matriz = 
[[1,2],[3,4]];
console.log(matriz);
// 42: Exiba o elemento da linha 1, coluna 2 da matriz [[5, 6], [7, 8]]
let matriz2 = [[5,6],[7,8]];
console.log(matriz2[0][1]);
// 43: Exiba todos os elementos da matriz [[1, 2, 3], [4, 5, 6]]
let matriz3 = [[1,2,3],[4,5,6]];
for(let i = 0; i < matriz3.length; i++){
    for(let j = 0; j < matriz3[i].length; j++){
        console.log(`Elementos [i],[j] = ${matriz3[i][j]}`);
    }
}
console.log(matriz3);
// 44: Some todos os números da matriz [[2, 4], [6, 8]]
let matriz4 = [[2,4], [6,8]];
let somaMatriz = 0;
for(let i = 0; i < matriz4.length; i++){
    for(let j = 0; j < matriz4[i].length; j++){
        somaMatriz = somaMatriz + matriz4[i][j];
    }
}
console.log(`A soma de todos os números da matriz é: ${somaMatriz}`);
// 45: Crie uma matriz 3x3 com números de 1 a 9
let matriz3X3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]];
for(let i = 0; i < matriz3X3.length; i++){
    console.log(matriz3X3[i]);
}

// 46: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]
let matrizDiagonal = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for(let i = 0; i < matrizDiagonal.length; i++){
    console.log(matrizDiagonal[i][i]);
}
// 47: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10
let matriz7 = [[1,2],[3,4]];
matriz7[0][1] = 10;
console.log(matriz7);
// 48: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]
let matriz8 = [[10,20],[30,40],[50,60]];
console.log(matriz8[0]);
// 49: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]
let matriz9 = [[1,2],[3,4],[5,6]];
console.log(` Linha 1, coluna 1 :${matriz9[0][1]}\n Linha 2, coluna 1: ${matriz9[1][1]}\n Linha 3, coluna 1: ${matriz9[2][1]}`);

// 50: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2
let matriz10 = [[2,4], [6,8]];

for(let i = 0; i < matriz10.length; i++){
    for(let j = 0; j < matriz10[i].length; j++){
        matriz10 = matriz[i][j] * 2;
    }
}

/*Colégio Estadual Antonio de Moraes Barros
Professor; Edson F Alves
Curso técnico:
10 EXERCÍCIOS COM OPERADOR TERNÁRIO
Instrução: Resolva usando operador ternário (? :)
============================================*/

/*EXERCÍCIO 1 (Fácil)
Verifique se um número é positivo ou não.*/
let numero = 10;
let resultado = numero > 0 ? "Positivo": "Negativo";
console.log(`O número ${numero} é: ${resultado}`);
/*EXERCÍCIO 2 (Fácil)
Verifique se uma pessoa pode votar.
- Se sim, retorne "Pode votar"- Se não, "Não pode votar"*/
let idade_voto = 16;
let resultado_voto = idade_voto >= 16 ? "Pode votar" : "Não pode votar";
console.log(`Com ${idade_voto} anos: ${resultado_voto}`);

/*EXERCÍCIO 3 (Fácil)
Descubra se um número é par ou ímpar.
- Se par, retorne "Par"- Se ímpar, retorne "Ímpar"*/
let num_par = 2;
let resultado_par = num_par % 2 === 0 ? "O número é par" : "O número é ímpar";
console.log(`O número ${num_par} é: ${resultado_par}.`);
/*EXERCÍCIO 4 (Fácil)
Crie uma verificação de nível de acesso.
- Se nível for "admin", retorne "Acesso total"
- Caso contrário, "Acesso restrito"*/
let verifica_nivel = "admin";
let retorno_nivel = verifica_nivel === "admin" ? "Acesso Total" : "Acesso restrito"
console.log(retorno_nivel);

/*EXERCÍCIO 5 (Médio-Fácil)
Aplique desconto em um produto.
- Se preço > 100, aplique 10% de desconto (multiplicar por 0.9)
- Caso contrário, mantenha o preço original*/

let preco = 110;
let desconto = preco > 100 ? preco * 0.9 : preco;
console.log(`O produto de ${preco} reais teve desconto e agora o seu preço atual é: ${desconto}.`);

/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
let media = 8;
let situacao = media >= 7? "aprovado" : "reprovado";
console.log(`A média do aluno é ${media} e ele está ${situacao}.`);

/*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/

let numero_par_medio = 12;
let resultado_numero_medio = numero_par_medio % 2 ===0 && numero_par_medio > 10 ? "atende critérios" : "não atende";
console.log(`O número ${numero_par_medio} ${resultado_numero_medio}.`);

/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/

let numero_8 = 0;
let classifique_numero = numero_8 > 0 ? "positivo" : numero_8 < 0 ? "negativo" : "zero";
console.log(`O número ${numero_8} é: ${classifique_numero}`);

/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/
let usuario = "admin";
let senha = 123;
let login = usuario === "admin" && senha === 123 ? "Login OK" : "Falha no login";
console.log(`O usuário ${usuario} e sua senha é ${senha} tem: ${login}.`);

/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/
let idade_10 = 60;
let classifique_idade = idade_10 < 12 ? "criança" : idade_10 <=17 ? "adolescente" : idade_10 <= 59 ? "adulto" : "idoso";
console.log(`A pessoa tem ${idade_10} anos, então ela é ${classifique_idade}`);
//Com if:
let idadePessoa = 12;
function ClassifiqueIdade(){
    if (idadePessoa < 12 ){
        return "criança";
    }
    else if(idadePessoa <=17){
        return "adolescente";
    }
    else if(idadePessoa <=59){
        return "adulto";
    }
    else{
        return "idoso";
    }
}
console.log(`A pessoa tem ${idadePessoa} anos, então ela é ${ClassifiqueIdade(idadePessoa)}`);

// ==================== ATIVIDADES COM OBJETOS ====================

// 51: Crie um objeto pessoa com nome "Ana" e idade 25
let pessoa = {
    nome : "Ana",
    idade: 25
};

// 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
let pessoa2 = {
    nome: "Carlos",
    cidade: "São Paulo"
};
console.log(`O nome da pessoa é ${pessoa2.nome} e mora em ${pessoa2.cidade}.`);

// 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
let pessoa3 = {
    nome: "Maria",
    idade: 20
};
console.log("Antes:" , pessoa3);
pessoa3.curso = "ADM";
console.log("Depois:" , pessoa3);

// 54: Altere a idade do objeto {nome: "João", idade: 18} para 19
let pessoa4 = {
    nome: "João",
    idade: 18
}
pessoa4.idade = 19;
console.log(pessoa4);
// 55: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}
let pessoa5 = {
    nome: "Pedro",
    telefone: 99999-9999
}
delete pessoa5.telefone;
console.log(pessoa5);
// 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}
let tenis = {
    marca: "Nike",
    tamanho: 42,
    cor: "preto"
}
console.log(tenis);
// 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"
function latir(){
    let cachorro = {
        nome: "Rex"
    }    
    console.log("Au au!");
}
console.log(latir());

// 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]
let aluno = {
    nome: "Lucas",
    notas: [8,7,9]
}
// 59: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"

// 60: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos
