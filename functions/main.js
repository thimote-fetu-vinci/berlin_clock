import { SimpleMinutes } from "./simpleMinutes.js";

export class Main {
    intToMinutes(number) {
        return number * 60 * 1000;
    }

    simpleMinutes(timestamp) {
        return SimpleMinutes(timestamp);
    }
}