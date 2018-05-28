var listBtn = document.getElementsByClassName("btn");
var affiche = document.getElementById("affiche");
var reset = document.getElementById("reset");



for (var i = 0; i < listBtn.length; i++) {
  listBtn[i].addEventListener("click", function() {
  affiche.value += this.value;
});
console.log(listBtn[i]);
}
