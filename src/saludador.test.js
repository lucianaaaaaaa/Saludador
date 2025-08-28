import saludo from "./saludador";

describe("Saludador", () => {
//   it("deberia saludar con Hola", () => {
//     expect(saludo()).toBe("Hola");
//   });

//   it("deberia pedir el nombre y saludar con nombre", () => {
//     const nombre = "Luciana";
//     expect(saludo(nombre)).toBe("Hola, Luciana");
//   });
    // it("deberia saludar de acuerdo a la hora", () => {
    //     const nombre = "Luciana";
    //     const horaActual = new Date().getHours();
    //     let saludoEsperado;
    //     if (horaActual < 12) {
    //     saludoEsperado = "Hola, buen día Luciana";
    //     } else if (horaActual < 20) {
    //     saludoEsperado = "";
    //     } else {
    //     saludoEsperado = "Hola, buenas noches Luciana";
    //     }
    //     expect(saludo(nombre)).toBe(saludoEsperado);
    // });

    // it("deberia pedir el genero y saludar con genero", () => {
    //     const nombre = "Luciana";
    //     const genero = "F";
    //     expect(saludo(nombre, genero)).toBe("Hola, buenas noches bienvenida Luciana");
    // });

    // it("deberia pedir la edad y saludar con edad", () => {
    //     const nombre = "Luciana";
    //     const genero = "F";
    //     const edad = 20;
    //     expect(saludo(nombre, genero, edad)).toBe("Hola, buenas noches bienvenida srta Luciana");
    // });

    it("deberia pedir el idioma y saludar en el idioma", () => {
        const nombre = "Luciana";
        const genero = "F";
        const edad = 40;
        const idioma = "ES";
        expect(saludo(nombre, genero, edad)).toBe("Hola, buenas noches bienvenida sra Luciana");
    });

});

