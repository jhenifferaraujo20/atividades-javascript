let idade = 18;
console.log(idade);
console.log(typeof idade);

let nome = "Jheniffer";
console.log(nome);
console.log(typeof nome);

/*
parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3)
+numero1 + +numero2 + +numero3
*/

let verdade = false;
console.log(verdade);
console.log(typeof verdade);

let listaDeFrutas1 = "Maçã";
let listaDeFrutas2 = "Banana";
let listaDeFrutas3 = "Limão";

console.log(listaDeFrutas1, listaDeFrutas2, listaDeFrutas3);

//Array --> Variável que eu consigo subdividir
let listaDeFrutas = ["Maçã", "Banana", "Limão"];
console.log(listaDeFrutas);
console.log(typeof listaDeFrutas);

/*o Array possui posições, cada valor do array fica armazenado em uma posição, começando em 0. 
Quando eu quero exibir um valor específico do array eu preciso indicar a posição onde se encontra
 essa valor NomeDoArray[posição] . Ex: listaDeFrutas[1] --> "Banana"
 */

console.log(listaDeFrutas[1]);

let personagemNome = "Eldor";
let personagemRaca = "Elfo";
let personagemClasse = "Mago";
let personagemVida = "100";
let personagemEnergia = "50";
console.log(personagemNome, personagemRaca, personagemClasse, personagemVida, personagemEnergia);

//et personagem = ["Eldor", "Elfo", "Mago", 100, 50];

//personagem[3] = 80;
//console.log(personagem);

let personagem = {
    "nome" : "Eldor",
    "raca" : "Elfo",
    "classe" : "Mago",
    "vida" : 100,
    "energia" : 50
};

console.clear()
console.dir(personagem);
console.log(personagem.vida);

let i = 1;
while (i <= 10){
    console.log(i);
    i = i + 1;
}

console.clear();

// Math.random() * (max - min) + min;
let numeroComputador = parseInt(Math.random() * (10 - 1) + 1);
console.log(numeroComputador);
let numeroJogador = prompt("Informe um número de 1 à 10");

if(numeroJogador == numeroComputador){
    console.log("Você Ganhou");
}else{
    console.log("Você perdeu");
}