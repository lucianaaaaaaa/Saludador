import saludo from "./saludador";

describe("Saludador", () => {
  test("deberia saludar con Hola", () => {
    expect(saludo()).toBe("Hola");
  });
});