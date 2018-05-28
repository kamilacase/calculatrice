var btn1 = document.getElementById('touche1');
var btn2 = document.getElementById('touche2');
var btn3 = document.getElementById('touche3');
var btn4 = document.getElementById('touche4');
var btn5 = document.getElementById('touche5');
var btn6 = document.getElementById('touche6');
var btn7 = document.getElementById('touche7');
var btn8 = document.getElementById('touche8');
var btn9 = document.getElementById('touche9');


var affiche = document.getElementById('affiche');
var reset = document.getElementById('reset');

reset.addEventListener("click", function() {
  affiche.value = '';
});

btn1.addEventListener("click", function() {
  affiche.value += '1';
});

btn1.addEventListener("click", function() {
  affiche.value += '2';
});
btn1.addEventListener("click", function() {
  affiche.value += '1';
});
btn1.addEventListener("click", function() {
  affiche.value += '3';
});
btn1.addEventListener("click", function() {
  affiche.value += '1';
});
btn1.addEventListener("click", function() {
  affiche.value += '1';
});
