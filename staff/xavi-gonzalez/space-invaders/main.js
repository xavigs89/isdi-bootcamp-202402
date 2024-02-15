//FUNCION PARA HACER QUE LA NAVE SE MUEVA DE IZQUIERDA A DERECHA Y DE ARRIBA A ABAJO

let ship = document.getElementById("ship");
var alien = document.getElementById("alien");

let x = 46;
let y = 80;

ship.style.left = x + "vw";
ship.style.top = y + "vh";

document.onkeydown = function (event) {
  if (event.key === "ArrowLeft" && x > 2) x = x - 1;
  else if (event.key === "ArrowRight" && x < 92) x = x + 1;
  if (event.key === "ArrowUp" && y > 0) y = y - 1;
  else if (event.key === "ArrowDown" && y < 80) y = y + 1;

  ship.style.left = x + "vw";
  ship.style.top = y + "vh";
};

//FUNCION PARA DETECTAR SI LA NAVE COLISIONA
function checkContact() {
  var shipRect = ship.getBoundingClientRect();
  var alienRect = alien.getBoundingClientRect();

  //if (
  /*PERE shotRect.x + shotRect.width > enemyRect.x &&
    shotRect.x < enemyRect.x + enemyRect.width &&
    shotRect.y + shotRect.height > enemyRect.y &&
    shotRect.y < enemyRect.y + enemyRect.height
  ) {
    */
  //shipRect.x + shipRect.width > alienRect.x) {
  ship.src = "images/boom.png";
  alien.src = "images/boom.png";

  setTimeout(function () {
    ship.style.display = "none";
    alien.style.display = "none";
  }, 2000);
}
//}
