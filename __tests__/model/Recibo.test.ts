import { Recibo } from "../../src/Recibo";

describe("Recibo", () => {
    test("criar com sucesso",async () => {
        const recibo = new Recibo();
        expect(recibo.codigo.length).toBe(6);
    })
});