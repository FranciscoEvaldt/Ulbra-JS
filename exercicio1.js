//Declarar uma variável, atribuir um valor numérico a ela. Mostrar o valor e o tipo. Teste todos os tipos vistos em sala de aula.

var nome ="joão";
//imprimir(nome);
console.log(`o conteudo e ${nome} e o tipo e ${typeof(nome)}`);

var numero = 123456;
console.log(`o conteudo e ${nome} e o tipo e ${typeof(nome)}`);

function imprimir(conteudo,tipo){
    console.log(`o conteudo e ${valor} e o tipo e ${typeof(valor)}`);

}


function calcular(oper, num1, num2){
    var total = 0;
    switch (oper) {
        case '+':
            total = num1 + num2;
            break;
        case '-':
            total = num1 - num2;
            break;
        case '*':
            total = num1 * num2;
            break;
        case '/':
            total = num1 / num2;
            break;

        default:
            total = undefined;
            break;
    }
    return total;

}
 
//----------

var test;
console.log('teste' + test);

//--------

//o valor undefined sera quando uma variável não possui um valor.

//---------

//NaN significa Not-A-Number. Significa que algo não é um número válido. No caso, você está tentando fazer um parser de 'a' para INT, mas 'a' não é um número, assim é gerado o erro NaN (Not-a-number). A propriedade NaN representa "Not -a- Number".

//---------
console.log ("Imprima a média aritmética de 3 números")
var mediaAritmetica = 0;

var primeiroNumero = 3;
console.log ("primeiro numero " + primeiroNumero);

var segundoNumero = 6;
console.log ("segundo numero " + segundoNumero);

var terceiroNumero = 9;
console.log ("terceiro numero " + terceiroNumero);

mediaAritmetica = (primeiroNumero + segundoNumero + terceiroNumero)/3;
console.log ("A média é: " + mediaAritmetica);

//----------

console.log ("Simule as notas de um aluno da Ulbra. AP1, AP2, AS e média final");
var mediaFinal = 0;

var ap1 = 1.5;
console.log ("avaliação parcial 1:  " + ap1);

var ap2 = 2.5;
console.log ("avaliação parcial 2:  " + ap2);

var as = 6;
console.log ("avaliação semestral:  " + as);

mediaFinal = ap1 + ap2 + as;
console.log ("A média final é:  " + mediaFinal);

//--------

function numero7() {
    var nome = "Francisco"
    var idade = 18;

    console.log("Nome: Francisco\n", "Idade: 24\n");

    if (idade >= 18) {
        console.log("é maior de idade");
    }

    else {
        console.log("é menor de idade");
    }
}

//---------

console.log ("Informe 3 números e mostre qual é o maior");
var n1 = 10;
console.log ("O primeiro número é: " + n1);

var n2 = 22;
console.log ("O segundo número é: " + n2);

var n3 = 16;
console.log ("O terceiro número é: " + n3);

if (n1>n2 && n1>n3){
    console.log ("O maio número é: " + n1)
}
else if (n2>n1 && n2>n3){
    console.log ("O maior número é: "+ n2)
}
else if (n3>n1 && n3 >n2){
    console.log ("O maior número é: " + n3)
}