import { Main } from "../functions/main.js";

describe("FiveHours", function () {
    const main = new Main();

    it("should return [false, false, false, false] for 0", function () {
        const result = main.fiveHours(main.intToHours(0));

        expect(result).toEqual([false, false, false, false]);
    });
});