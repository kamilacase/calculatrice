var btn1 = document.getElementById('touche1');
var btn2 = document.getElementById('touche2');
var btn3 = document.getElementById('touche3');
var btn4 = document.getElementById('touche4');
var btn5 = document.getElementById('touche5');
var btn6 = document.getElementById('touche6');
var btn7 = document.getElementById('touche7');
var btn8 = document.getElementById('touche8');
var btn9 = document.getElementById('touche9');
var btn0 = document.getElementById('touche0');
var btnPlus = document.getElementById('touchePlus');
var btnMoins = document.getElementById('toucheMoins');
var btnMulti = document.getElementById('toucheMulti');
var btnDiv = document.getElementById('toucheDiv');
var btnEgal = document.getElementById('toucheEgal');


var affiche = document.getElementById('affiche');
var reset = document.getElementById('reset');

reset.addEventListener("click", function() {
  affiche.value = '';
});

btn1.addEventListener("click", function() {
  affiche.value += '1';
});

btn2.addEventListener("click", function() {
  affiche.value += '2';
});
btn3.addEventListener("click", function() {
  affiche.value += '3';
});
btn4.addEventListener("click", function() {
  affiche.value += '4';
});
btn5.addEventListener("click", function() {
  affiche.value += '5';
});
btn6.addEventListener("click", function() {
  affiche.value += '6';
});
btn7.addEventListener("click", function() {
  affiche.value += '7';
});
btn8.addEventListener("click", function() {
  affiche.value += '8';
});
btn9.addEventListener("click", function() {
  affiche.value += '9';
});
btn0.addEventListener("click", function() {
  affiche.value += '0';
});
btnPlus.addEventListener("click", function() {
  affiche.value += '+';
});
btnMoins.addEventListener("click", function() {
  affiche.value += '-';
});
btnMulti.addEventListener("click", function() {
  affiche.value += '*';
});
btnDiv.addEventListener("click", function() {
  affiche.value += '/';
});
btnEgal.addEventListener("click", function() {
  affiche.value += '=';
});
if (btnPlus.addEventListener(click)) {

}
