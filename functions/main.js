import { SimpleMinutes } from "./simpleMinutes.js";
import { FiveMinutes } from "./fiveMinutes.js";

export class Main {
    intToMinutes(number) {
        return number * 60 * 1000;
    }

    simpleMinutes(timestamp) {
        return SimpleMinutes(timestamp);
    }

    fiveMinutes(timestamp) {
        return FiveMinutes(timestamp);
    }
}