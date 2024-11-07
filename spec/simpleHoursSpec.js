import { Main } from "../functions/main.js";

describe("SimpleHours", function () {
    const main = new Main();

    it("should return [false, false, false, false] for 0", function () {
        const result = main.simpleHours(main.intToHours(0));

        expect(result).toEqual([false, false, false, false]);
    });
});