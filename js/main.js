/*var nome = "Maira Celestino";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo"
//alert("Bem vindo" + nome);
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);

var idade = prompt("Qual é a sua idade");
//var idade = 18 ; 
if (idade >= 18){
    alert("maior de idade");
}
 else {
     alert("menor de idade");
 }
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
};

function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, nome_nome){
    frase.replace(nome, novo_nome);
}

alert(soma(5, 10));
alert("Vai Japão", "Japão", "Brasil");

*/

//var lista = ["maçá", "pêra", "laranja" ];
//lista.push("uva");
//lista.pop(lista);
//console.log(lista[0])
//console.log(lista.toString()[0]);
//console.log(lista);
//console.log(lista.join(" | "));
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[1]);
//alert(lista[1]);

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
   // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.google.com.br/?gws_rd=ssl");
    window.location.href = "https://www.google.com.br/?gws_rd=ssl";

}

function trocar(elemento){
    elemento.innerHTML =  "Obrigado por passar o mouse";
   // document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>";
   // alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("agradecimento").innerHTML = "<b>Passe o mouse aqui</b>";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}