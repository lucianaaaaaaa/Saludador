import saludo from "./saludador.js";

const botonSaludar = document.getElementById("boton_saludar");
const areaSaludo = document.getElementById("saludo");
const nombreUsuario = document.getElementById("nombre_usuario");
const generoUsuario = document.getElementById("genero_usuario");
const edadUsuario = document.getElementById("edad_usuario");


botonSaludar.addEventListener("click", () => {
  areaSaludo.textContent = saludo(nombreUsuario.value, generoUsuario.value, edadUsuario.value);
});