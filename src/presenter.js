import saludo from "./saludador.js";

const botonSaludar = document.getElementById("boton_saludar");
const areaSaludo = document.getElementById("saludo");
const nombreUsuario = document.getElementById("nombre_usuario");

botonSaludar.addEventListener("click", () => {
  areaSaludo.textContent = saludo(nombreUsuario.value);
});