import saludo from "./saludador";

describe("Saludador", () => {
//   test("deberia saludar con Hola", () => {
//     expect(saludo()).toBe("Hola");
//   });

//   test("deberia pedir el nombre y saludar con nombre", () => {
//     const nombre = "Luciana";
//     expect(saludo(nombre)).toBe("Hola, Luciana");
//   });
    test("deberia saludar de acuerdo a la hora", () => {
        const nombre = "Luciana";
        const horaActual = new Date().getHours();
        let saludoEsperado;
        if (horaActual < 12) {
        saludoEsperado = "Hola, buen día Luciana";
        } else if (horaActual < 20) {
        saludoEsperado = "";
        } else {
        saludoEsperado = "Hola, buenas noches Luciana";
        }
        expect(saludo(nombre)).toBe(saludoEsperado);
    });

});

