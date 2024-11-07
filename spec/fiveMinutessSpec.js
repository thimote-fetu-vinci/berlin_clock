import { Main } from "../functions/main.js";

describe("FiveMinutes", function () {
    const main = new Main();

    it("should return [false, false, false, false, false, false, false, false, false, false, false] for 0", function () {
        const result = main.fiveMinutes(main.intToMinutes(0));

        expect(result).toEqual([false, false, false, false, false, false, false, false, false, false, false]);
    });

    it("should return [true, false, false, false, false, false, false, false, false, false, false] for 5", function () {
        const result = main.fiveMinutes(main.intToMinutes(5));

        expect(result).toEqual([true, false, false, false, false, false, false, false, false, false, false]);
    });
});