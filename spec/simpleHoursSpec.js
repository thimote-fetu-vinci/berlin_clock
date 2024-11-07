import { Main } from "../functions/main.js";

describe("SimpleHours", function () {
    const main = new Main();

    it("should return [false, false, false, false] for 0", function () {
        const result = main.simpleHours(main.intToHours(0));

        expect(result).toEqual([false, false, false, false]);
    });

    it("should return [true, false, false, false] for 1", function () {
        const result = main.simpleHours(main.intToHours(1));

        expect(result).toEqual([true, false, false, false]);
    });

    it("should return [true, true, false, false] for 2", function () {
        const result = main.simpleHours(main.intToHours(2));

        expect(result).toEqual([true, true, false, false]);
    });

    it("should return [true, true, true, false] for 3", function () {
        const result = main.simpleHours(main.intToHours(3));

        expect(result).toEqual([true, true, true, false]);
    });

    it("should return [true, true, true, true] for 4", function () {
        const result = main.simpleHours(main.intToHours(4));

        expect(result).toEqual([true, true, true, true]);
    });
});