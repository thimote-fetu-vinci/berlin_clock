import { Main } from "../functions/main.js";

describe("SimpleMinutes", function () {
    const main = new Main();

    it("should return true for even numbers", function () {
        const result = main.lampSeconds(main.intToSeconds(0));

        expect(result).toEqual(true);
    });
});