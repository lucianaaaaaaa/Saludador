import saludo from "./saludador.js";

const botonSaludar = document.getElementById("boton_saludar");
const areaSaludo = document.getElementById("saludo");

botonSaludar.addEventListener("click", () => {
  areaSaludo.textContent = saludo();
});