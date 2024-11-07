import { Main } from "../functions/main.js";

describe("SimpleMinutes", function () {
    const main = new Main();

    it("should return true for even numbers", function () {
        const result = main.lampSeconds(main.intToSeconds(0));

        expect(result).toEqual(true);
    });

    it("should return false for odd numbers", function () {
        const result = main.lampSeconds(main.intToSeconds(1));

        expect(result).toEqual(false);
    });
});