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

    it("should return [true, true, false, false, false, false, false, false, false, false, false] for 10", function () {
        const result = main.fiveMinutes(main.intToMinutes(10));

        expect(result).toEqual([true, true, false, false, false, false, false, false, false, false, false]);
    });

    it("should return [true, true, true, false, false, false, false, false, false, false, false] for 15", function () {
        const result = main.fiveMinutes(main.intToMinutes(15));

        expect(result).toEqual([true, true, true, false, false, false, false, false, false, false, false]);
    });

    it("should return [true, true, true, true, false, false, false, false, false, false, false] for 20", function () {
        const result = main.fiveMinutes(main.intToMinutes(20));

        expect(result).toEqual([true, true, true, true, false, false, false, false, false, false, false]);
    });

    it("should return [true, true, true, true, true, false, false, false, false, false, false] for 25", function () {
        const result = main.fiveMinutes(main.intToMinutes(25));

        expect(result).toEqual([true, true, true, true, true, false, false, false, false, false, false]);
    });

    it("should return [true, true, true, true, true, true, false, false, false, false, false] for 30", function () {
        const result = main.fiveMinutes(main.intToMinutes(30));

        expect(result).toEqual([true, true, true, true, true, true, false, false, false, false, false]);
    });

    it("should return [true, true, true, true, true, true, true, false, false, false, false] for 35", function () {
        const result = main.fiveMinutes(main.intToMinutes(35));

        expect(result).toEqual([true, true, true, true, true, true, true, false, false, false, false]);
    });

    it("should return [true, true, true, true, true, true, true, true, false, false, false] for 40", function () {
        const result = main.fiveMinutes(main.intToMinutes(40));

        expect(result).toEqual([true, true, true, true, true, true, true, true, false, false, false]);
    });
});