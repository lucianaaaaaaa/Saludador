import saludo from "./saludador";

describe("Saludador", () => {
//   test("deberia saludar con Hola", () => {
//     expect(saludo()).toBe("Hola");
//   });

  test("deberia pedir el nombre y saludar con nombre", () => {
    const nombre = "Luciana";
    expect(saludo(nombre)).toBe("Hola, Luciana");
  });

});

