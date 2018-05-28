var listBtn = document.getElementsByClassName("btn");
var affiche = document.getElementById("affiche");
var reset = document.getElementById("reset");

reset.addEventListener("click" ,function()
    {affiche.value = ""});


for (var i = 0; i < listBtn.length; i++) {
  listBtn[i].addEventListener("click", function() {
  affiche.value += this.value;
  if (this.value == "=" ) {
      calc();
  }



}

function calc(){
    var calcul = affiche.value;
    var operator = "";
    var strNumber ="";
    for (var i = 0; i < calcul.length; i++) {
        if (operator == ""){
            if (calcul[i] == "+" || calcul[i] == "-" || calcul[i] == "*" || calcul[i] == "/" || calcul[i] == "="){
                operator = calcul[i];
            } else {
            strNumber = calcul[i];

            }
        }
    }
};
