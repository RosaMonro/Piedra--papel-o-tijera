//para que el pc de una respuesta aleatoria
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Opciones del jugador y del pc (función)
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🔘";
  } else if (jugada == 2) {
    resultado = "Papel 📄";
  } else if (jugada == 3) {
    resultado = "Tijeras ✂";
  } else {
    resultado = "Nulo";
  }
  return resultado;
}

// 1=piedra - 2=papel - 3=tijera
let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijeras");

  alert("PC elige: " + eleccion(pc));
  alert("Tú eliges: " + eleccion(jugador));

  //COMBATE
  if (pc == jugador) {
    alert("Ha habido un empate");
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("Has ganado");
    triunfos = triunfos + 1;
  } else {
    alert("Has perdido");
    perdidas = perdidas + 1;
  }
}

if (triunfos == 3) {
  alert(
    "Has ganado " +
      triunfos +
      " veces y solo has perdido " +
      perdidas +
      " veces. ¡Eres una máquina!"
  );
} else if (perdidas == 3) {
  alert(
    "Has perdido " +
      perdidas +
      " veces y solo has ganado " +
      triunfos +
      " veces. Eres un looser"
  );
}
