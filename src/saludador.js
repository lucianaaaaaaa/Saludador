const textos = {
    ES: {
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
    },
    EN: {
        saludo: "Hello",
        dia: "good morning",
        tarde: "good afternoon",
        noche: "good evening",
        F: "welcome",
        M: "welcome",
        srta: "miss",
        caballero: "gentleman",
        sr: "mr",
        sra: "mrs",
    }
  

}

function saludo(nombre, genero, edad, idioma) {
    const horaActual = new Date().getHours();
    if(idioma==="EN")
    {
        textos.saludo = textos.EN.saludo;
        textos.dia = textos.EN.dia;
        textos.tarde = textos.EN.tarde;
        textos.noche = textos.EN.noche;
        textos.F = textos.EN.F;
        textos.M = textos.EN.M;
        textos.srta = textos.EN.srta;
        textos.caballero = textos.EN.caballero;
        textos.sr = textos.EN.sr;
        textos.sra = textos.EN.sra;
    }
    else{
        textos.saludo = textos.ES.saludo;
        textos.dia = textos.ES.dia;
        textos.tarde = textos.ES.tarde;
        textos.noche = textos.ES.noche;
        textos.F = textos.ES.F;
        textos.M = textos.ES.M;
        textos.srta = textos.ES.srta;
        textos.caballero = textos.ES.caballero;
        textos.sr = textos.ES.sr;
        textos.sra = textos.ES.sra;
    }
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