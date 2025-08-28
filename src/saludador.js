const textos = {
  saludo: "Hola",
  dia: "buen día",
  tarde: "buenas tardes",
  noche: "buenas noches",
  F: "bienvenida",
  M: "bienvenido"
}

function saludo(nombre, genero) {
    const horaActual = new Date().getHours();
    let saludoTiempo="";
    if (horaActual < 12) {
        saludoTiempo = textos.dia;
    } else if (horaActual < 20) {
        saludoTiempo = textos.tarde;
    } else {
        saludoTiempo = textos.noche;
    }
    if(genero==="F"){
        nombre = `${textos.F} ${nombre}`;
    }
    if(genero==="M"){
        nombre = `${textos.M} ${nombre}`;
    }
    return `${textos.saludo}, ${saludoTiempo} ${nombre}`;
}


export default saludo;