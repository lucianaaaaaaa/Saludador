const textos = {
  saludo: "Hola",
  dia: "buen día",
  tarde: "buenas tardes",
  noche: "buenas noches"
}

function saludo(nombre) {
    const horaActual = new Date().getHours();
    let saludoTiempo="";
    if (horaActual < 12) {
        saludoTiempo = textos.dia;
    } else if (horaActual < 20) {
        saludoTiempo = textos.tarde;
    } else {
        saludoTiempo = textos.noche;
    }

    return `${textos.saludo}, ${saludoTiempo} ${nombre}`;
}


export default saludo;