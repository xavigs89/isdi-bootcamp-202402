//FUNCION PARA HACER QUE LA NAVE SE MUEVA DE IZQUIERDA A DERECHA Y DE ARRIBA A ABAJO

let ship = document.getElementById("ship");

let x = 46;
let y = 80;

ship.style.left = x + "vw";
ship.style.top = y + "vh";

document.onkeydown = function (event) {
  if (event.key === "ArrowLeft" && x > 2) x = x - 1;
  else if (event.key === "ArrowRight" && x < 92) x = x + 1;
  if (event.key === "ArrowUp" && y > 50) y = y - 1;
  else if (event.key === "ArrowDown" && y < 80) y = y + 1;

  ship.style.left = x + "vw";
  ship.style.top = y + "vh";
};

/*NUEVOOOOOOOOOOOOOOOOOOOO
  var shiprect = ship.getBoundingClientRect();
  var alienRect = alien.getBoundingClientRect();

  console.log(shiprect, alienRect);

  if (shiprect.x + shiprect.width > alienRect.x) {
    ship.src = "images/imagen"
    alien.src = "images/imagen"

    setTimeout(function()) {
      ship.style.display = "none"
      alien.style.display = "none"
    } , 3000
  }
    
};*/
