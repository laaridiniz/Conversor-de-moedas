var solicitante = prompt("Digite o seu nome:");
var valorEmDolar = prompt(
  "Digite o valor em dólar que pretende converter para real:"
);
var cotacaoDoDolar = 5.15;

var valorEmReal = valorEmDolar * cotacaoDoDolar;

valorEmReal = valorEmReal.toFixed(2);

alert("Olá " + solicitante + "!\n" + "O valor em real é: R$" + valorEmReal);
