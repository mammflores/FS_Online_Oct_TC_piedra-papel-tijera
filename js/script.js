/* opciones disponibles 
reglas const?
contador puntos
funciones que hay que hacer:
1. actualizar puntos
2. obtener resultado
3. mostrar resultadoç
4. que ordenador seleccione jugada
5. event listener botones */

let piedra = document.getElementById("piedra");
let papel = document.getElementById("papel");
let tijera = document.getElementById("tijera");
let resultadosDiv = document.getElementById("resultados");
let contadorUsuario = document.getElementById("contador-usuario");
let contadorOrdenador = document.getElementById("contador-ordenador");

const opciones = ["piedra", "papel", "tijeras"];
const resultados = {
    "piedra": { "piedra": "¡Empate!", "papel": "¡Ganaste!", "tijeras": "¡Perdiste!" },
    "papel": { "piedra": "¡Ganaste!", "papel": "¡Empate!", "tijeras": "¡Perdiste!" },
    "tijeras": { "piedra": "¡Perdiste!", "papel": "¡Ganaste!", "tijeras": "¡Empate!" }
};

piedra.addEventListener("click", function() {
    jugar("piedra");
});

papel.addEventListener("click", function() {
    jugar("papel");
});

tijera.addEventListener("click", function() {
    jugar("tijeras");
});

function jugar(jugadaUsuario) {
    const jugadaPc = opciones[Math.floor(Math.random() * 3)];
    const resultado = resultados[jugadaUsuario][jugadaPc];

    resultadosDiv.textContent = `Jugador: ${jugadaUsuario}, PC: ${jugadaPc}. Resultado: ${resultado}`;

    if (resultado.includes("Ganaste")) {
        incrementarPuntos(contadorUsuario);
    } else if (resultado.includes('Perdiste')) {
        incrementarPuntos(contadorOrdenador);
    }
}

function incrementarPuntos(contador) {
    let puntos = parseInt(contador.textContent.split(': ')[1]);
    puntos++;
    contador.textContent = `Puntos: ${puntos}`;
}
