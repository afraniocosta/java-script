Function

/*Tudo com exceção do código de execução global, é executado dentro de uma função. 
Mas uma função em Javascript é um objeto.

Para usar uma função devemos defini-la no escopo de onde queremos chamá-la.

Funções em Javascript são conhecidas como objetos de primeira classe (first-class objects). 
Isso porque tudo o que você pode fazer com um objeto, você pode fazer com funções. 

Na realidade uma função é um objeto do tipo Function.*/

//Ex de funções em JS:


//1- Criadas de forma literal:
function myFunction(){} //definindo uma função

//2- Passadas como parâmetros para outras funções
function myFunction(param){} //definindo a função

//invocando a função e passando como parâmetro outra função
myFunction(function(){ console.log("função como parâmetro") })

//3- Atribuídas para propriedades de objetos;

//definindo um objeto com uma propriedade que é uma função
let obj = {    
    start:function(){}
};

//4- atribuindo uma função como propriedade para um objeto dinamicamentelet obj = {};
obj.myFunction = function(){};

//Retornadas como resultado de uma função
function myFunction(){
    
    return function(){} //retornando uma função como resultado}

//6- Possuir propriedades que podem ser atribuídas dinamicamente
function myFunction(){}
myFunction.startTime = 0 // atribuindo uma propriedade para a função// a forma abaixo também funciona
let myFunction = function(){}myFunction.startTime = 0    


// Definindo funções

Definindo funções

//Em Javascript há mais de uma forma de definir funções. Cada forma pode alterar a maneira de como e quando podemos invocá-las e manipulá-las. 
//Podemos definir funções como: 

1) function declarations 
2) function expressions 
3) arrow functions
4) function constructor 
5) function generators


/*
1) Function declarations:

Essa é a forma mais utilizada de definir funções. 
Nós utilizamos a palavra-chave function seguida de um nome para a função e uma lista de parâmetros (que é opcional) entre parênteses. 
Podemos definir function declarations em qualquer lugar de nosso código e dentro de outras funções inclusive. Vamos ver como fica isso no código:*/

// define uma função que recebe 2 argumentos e retorna a soma dos mesmos
function sum(x, y){
    return x + y;
}
function createProfile(){
    
    function isValid(){ //definindo uma função dentro de outra função
        return 'valid!!'
    }}

//Function declaration podem ser invocadas antes ou depois de serem definidas no código fonte, não faz diferença. O exemplo abaixo funciona de ambas as formas.

function sum(x,y){return x + y} //definindo a função antes de invocarsum(1,3)//invocando antes de definir

sum(1,3)

function sum(x,y){ return x + y }

/*
2) Function expressions

Nós podemos utilizar funções como qualquer outro tipo em Javascript. 
Podemos utilizar as funções como qualquer outra expressão na qual definimos quando e onde precisamos para executar imediatamente ou não, dentro de um dado contexto. 
Vamos ver alguns exemplos de function expressions.

*/

let sum = function(x, y) {
    return x + y;
}
//passando a função como argumento para outra função

myFunction(function(){})
// definindo uma função e invocando ela após a definição
// os 5 exemplos abaixo são function expressions que vão ser imediatamente invocadas

(function(){})()
+function(){}()
-function(){}()
!function(){}()
~function(){}()

/*

Em function expressions o nome é opcional, uma vez que atribuídas a uma variável elas podem ser invocadas pelo nome da variável. Passadas como argumento podem ser invocadas pelo nome do parâmetro da função. Invocadas imediatamente(os últimos 5 exemplos acima, vamos falar mais disso no post), o nome é irrelevante para ser executado.

Ao contrario de function declarations, function expressions não podem ser invocadas antes de sua definição no código. 
O exemplo abaixo gera um erro:

*/

myFunction() //ReferenceError: myFunction is not defined

let myFunction = function(){}

/*

3- Arrow functions

Arrow functions foram introduzidas no ES6. 
É basicamente uma forma mais curta de definir function expressions e ajuda a tornar o código mais fácil de ler, principalmente nas expressões curtas. 
São definidas da seguinte forma:

*/

let myFunction = (x, y) => x + y

console.log(myFunction(1,3)) // o resultado é 4

/*

Essa é uma função definida como uma Arrow function que recebe 2 argumentos e retorna a soma dos mesmos. 
Há várias coisas diferentes nessa função:

- Não há a necessidade da palavra-chave function
- Não há necessidade de envolver o corpo da função entre parênteses {}
- Não há necessidade da palavra-chave return
- Há um novo operador =>

*/

/* O exemplo acima é o equivalente a isso: */

let myFunction = function(x, y){

        return x + y;
}

/* Mas essa não é a única forma de definir Arrow functions. Os exemplos abaixo também são válidos:*/

// corpo com mais de uma linha
let myFunction = (x, y) => {
    let z = 2     return x + y + z;
}

// apenas um parâmetro
let myFunction = x => x * 2

let myFunction = x => {
        return x * 2
}

let myFunction = () => {
        console.log("Arrow function!")
}

/*Para entender melhor a diferença das definições acima vamos ver algumas regras para se definir e utilizar as Arrow functions:

    Se o corpo da função tem mais de uma linha é preciso envolvê-lo entre parênteses.
    Se o corpo da função tem mais de uma linha e há um valor de retorno, é necessário usar a palavra-chave return
    Se a função tem apenas um parâmetro, os parênteses são opcionais

*/

/*

4- Function constructor

Esse é a forma mais incomum(minha opinião) de se definir funções. Function constructors nos permitem definir funções dinamicamente. 
O dinamicamente aqui citado é definir a assinatura e o corpo da função. Vamos ver como isso é feito no código:

*/

var sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 6)); //imprime 8

//Diretamente do mozila.org essa é a assinatura de uma function constructor:

new Function ([arg1[, arg2[, ...argN]],] functionBody)

/*

Nós passamos uma lista de argumento que vão ser os parâmetros da função que está sendo criada e o último argumento é a definição do corpo da função.
Esse é um recurso muito flexível, mas tem um custo de performance de se fazer o parser via eval das strings em código válido.
Utilizando esse método fica mais claro que toda a função é um objeto em Javascript. Mais especificamente um Function object.
Para mais detalhes dos métodos disponíveis de function constructors consulte o site da mozilla.

*/

/* 

Callback functions

Callback functions são muito faladas no mundo Javascript. Não são uma forma de definir funções e nem um tipo novo. 
Ë apenas uma forma de uso de qualquer uma das formas acima explicadas.

Quando passamos uma função como argumento para outra função, para que em dado momento ela seja invocada, estamos passando uma função de callback. 
Vamos pegar o exemplo de uma clássica requisição ajax:

*/

ajaxRequest("/data", function(){
    //Faça algo quando a requisição estiver completo
 })

/*

Estamos definindo aqui uma função que será invocada no futuro quando a requisição estiver completa.

Sempre que você ver um parâmetro chamado callback em uma função(essa é uma convenção muito comum), 
é porque você deve passar uma função que será invocada em dado momento do contexto dessa função.

*/


/* 

Parâmetros de função
Parâmetro é o nome que se da para a variável que nós declaramos na definição de uma função. 
Depois das novas implementações do ES6 há três tipos de parâmetros que podemos utilizar ao definir as funções em Javascript.
A primeira e mais simples forma é especificar na assinatura da função O NOME DAS VARIÁVEIS QUE QUEREMOS TRABALHAR DENTRO DO CORPO DA FUNÇÃO:

*/

function sum(a, b){ // a e b são os parâmetros dessa função
    return a + b
}

/*

Outra forma de definir os parâmetros é com valores padrões(default parameters) definidos no caso da função ser invocada sem ter os argumentos passados.

*/

function sum(a = 1, b = 3){
    return a + b;
}

sum() // retorna 4
sum(2) // retorna 5
sum(2,4) // retorna 6

/*

Qualquer uma das três formas acima de invocar a função vai funcionar. 
Basicamente o que nós estamos dizendo para o Javascript aqui é:"Se o parâmetro a não for informado, assuma que o valor é 1". 
Default parameter é um recurso também adicionado para a linguagem no ES6, antes disso para ter o mesmo comportamento teríamos que escrever algo mais ou menos assim:

*/

function sum(a, b){    
    a = typeof a === undefined ? 1 : b
    b = typeof b === undefined ? 3 : b        
    
    return a + b;

}

sum() // retorna 4

/*

Outra forma que podemos definir parâmetros é com rest paramaters, que também é um recurso que veio com o ES6.
Imagine que você não sabe quantos argumentos serão passados para a função quando ela for invocada, mas precisa processar todos eles. Como você faz?

*/

function myFunction(param1, ...moreParams){    
    console.log(param1);
    console.log(moreParams);
}

myFunction(2,3,4,5,6); // vai imprimir a saida abaixo
// 2
//[3,4,5,6]

function myFuncTwo(...params){
    console.log(params)
}

myFuncTwo(1,2,3,4); // retorna [1,2,3,4]

/*

Entendeu como funciona? 
Uma vez que você define parâmetros com o rest operator, que é os … seguido do nome do parâmetro, todos os argumentos que você passar vão ser agrupados 
em um único parâmetro como um array.
No primeiro exemplo do código acima eu tenho um parâmetro normal e estou agrupando todos os demais argumentos que podem ser passados com o rest parameter. 
Já no segundo exemplo estou agrupando todos os parâmetros com o rest parameter.

O rest parameter sempre deve ser o último parâmetro definido na função.

*/


/*

Para finalizar a seção de como definir funções, você deve ter notado que uso os termos argumentos e parâmetros e que pode lhe parecer a mesma coisa mas não é. 
Me refiro a parâmetro como a variável que é definido na declaração de uma função, e argumento é o valor passado para a função quando ela é invocada. 
Em outras palavras um argumento é atribuído para um parâmetro quando uma função é invocada.

Seguindo esse entendimento, você pode invocar uma função com mais argumentos do que parâmetros, mas o contrário gera um erro.

*/

/*

PARÂMETRO: Variável que é definida na declaração de uma função
ARGUMENTO: Valor passado para a função quando ela é invocada

*/

/*

Invocando funções

Em javascript nós temos 5 maneiras de invocar funções: como funções, como método, como um constructor e com os métodos apply e call.

Antes de vermos cada uma dessas formas vamos discutir rapidamente dois parâmetros que são definidos pela linguagem 
implicitamente quando definimos uma função e que são atribuídos valores de acordo com a forma que invocamos uma função.

*/

/*

Parâmetros arguments e this

Vamos analisar o código abaixo:

*/

function sum(x, Y){
    console.log(arguments);
    console.log(this)
    
    return X + y;    
}console.log(sum(1, 4));// vai imprimir
{"0":1,"1":4}
window
5

/*

arguments e this são os parâmetros implícitos que o Javascript atribui quando a função é invocada. 
O parâmetro arguments é um objeto com todos os argumentos que a função recebeu no momento em que foi invocada. 
O this é o contexto em que a função foi chamada.

Podemos utilizar o arguments quando não sabemos quantos argumentos vamos receber quando a função for invocada. 
É o mesmo propósito do rest parameter, só que este só está disponível no ES6, 
se você não tem como utilizar ES6 em seu projeto arguments resolve o seu problema.

O valor de arguments sempre vai ser a mesma coisa, os argumentos passados para a função no momento em que foi invocada. 
Mas o this pode mudar dependendo da forma que você invocou a função. Vou detalhar mais ao mostrar cada forma de invocar as funções.

*/

/*

Invocando uma função como função

Se você achou redundante esse título, saiba que eu também. Mas essa forma de descrever que uma função é invocada como função, 
é para representar que vamos invocar uma função pelo nome que ela foi definida seguida por (). 

O código abaixo mostra como é:

*/

function sum(x, Y){
    console.log(arguments);
    console.log(this)
    
    return X + y;    
}

console.log(sum(1, 4));

/*

Esse é o caso mais comum de uso das funções. Para esse caso, quando a função for invocada o parâmetro this vai receber como argumento o objeto Window. 
Como exibido no primeiro exemplo da seção Parâmetros arguments e this. Se você estiver usando nodejs o this vai ser o contexto global do ambiente, 
que contém os objetos global, process entre outros.

Caso você esteja em strict mode invocar uma função como função vai fazer com que o this seja undefined.

*/

"use strict"function sum(x, Y){
    console.log(arguments);
    console.log(this)
    
    return X + y;    
}console.log(sum(1, 4));// vai imprimir
{"0":1,"1":4}
undefined
5

/*

Também podemos invocar funções como funções com uma forma chamada Immediately-invoked function expression(IIEF). O código abaixo é um exemplo disso:

*/

(function(){console.log("IIEF"})()
-function(){console.log("IIEF"}()
+function(){console.log("IIEF"}()
!function(){console.log("IIEF"}()
~function(){console.log("IIEF"}()

/*

Envolvendo a função entre parênteses e adicionando () novamente a função é invocada. Dessa forma o nome da função e opcional, 
uma vez que ela vai imediatamente invocada após a sua definição. Outra opção é utilizar os operadores +, -, ! e ~ seguido dos ().

*/