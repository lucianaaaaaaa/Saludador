const textos = {
  saludo: "Hola",
  dia: "buen día",
  tarde: "buenas tardes",
  noche: "buenas noches",
  F: "bienvenida",
  M: "bienvenido",
  srta: "srta",
  caballero: "caballero",
  sr: "sr",
  sra: "sra",

}

function saludo(nombre, genero, edad) {
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
        if(edad<=30)
        {
            nombre = `${textos.F} ${textos.srta} ${nombre}`;
        }
        else
        {
            nombre = `${textos.F} ${textos.sra} ${nombre}`;
        }
    }
    edad= parseInt(edad,10);
    if(genero==="M"){
        if(edad<=30)
        {
            nombre = `${textos.M} ${textos.caballero} ${nombre}`;
        }
        else
        {
            nombre = `${textos.M} ${textos.sr} ${nombre}`;
        }
    }
    return `${textos.saludo}, ${saludoTiempo} ${nombre}`;
}


export default saludo;