let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "none";

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none";

    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonpiedra = document.getElementById("boton-piedra");
    botonpiedra.addEventListener("click", ataquepiedra);
    
    let botonpapel = document.getElementById("boton-papel");
    botonpapel.addEventListener("click", ataquepapel);

    let botontijera = document.getElementById("boton-tijera");
    botontijera.addEventListener("click", ataquetijera);

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    sectionSeleccionarMascota.style.display = "none";

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "flex";

    let perlitaSeleccionado = document.getElementById("Perlita").checked;
    let burbujaSeleccionado = document.getElementById("burbuja").checked;
    let polarSeleccionado = document.getElementById("polar").checked;

    let spanMascotaJugador = document.getElementById("mascota-jugador");

    if (perlitaSeleccionado) {
        spanMascotaJugador.innerHTML = "Perlita";
    } else if (burbujaSeleccionado) {
        spanMascotaJugador.innerHTML = "Burbuja";
    } else if (polarSeleccionado) {
        spanMascotaJugador.innerHTML = "Polar";
    } else {
        alert("Debes seleccionar una Mascota");
        return;
    }

    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Perlita";
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Burbuja";
    } else {
        spanMascotaEnemigo.innerHTML = "Polar";
    }
}

function ataquepiedra() {
    ataqueJugador = "piedra";
    ataqueAleatorioEnemigo();
}

function ataquepapel() {
    ataqueJugador = "papel";
    ataqueAleatorioEnemigo();
}

function ataquetijera() {
    ataqueJugador = "tijera";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "piedra";
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "papel";
    } else {
        ataqueEnemigo = "tijera";
    }
    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador");
    let spanVidasEnemigo = document.getElementById("vidas-enemigo");

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if (
        (ataqueJugador == "piedra" && ataqueEnemigo == "tijera") ||
        (ataqueJugador == "tijera" && ataqueEnemigo == "papel") ||
        (ataqueJugador == "papel" && ataqueEnemigo == "piedra")
    ) {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    revisarVidas();
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES GANASTE");
    } else if (vidasJugador == 0) {
        crearMensajeFinal("LO SIENTO PERDISTE");
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("resultado");
    sectionMensajes.innerHTML = resultado;
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado");
    sectionMensajes.innerHTML = resultadoFinal;

    // Deshabilitar los botones de ataque correctos
    document.getElementById("boton-piedra").disabled = true;
    document.getElementById("boton-papel").disabled = true;
    document.getElementById("boton-tijera").disabled = true;

    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
    location.reload();
}

function habilitarBotones() {
    document.getElementById("boton-piedra").disabled = false;
    document.getElementById("boton-papel").disabled = false;
    document.getElementById("boton-tijera").disabled = false;
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.addEventListener("DOMContentLoaded", iniciarJuego);
