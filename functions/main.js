import SimpleMinutes from "./simpleMinutes.js";
import FiveMinutes from "./fiveMinutes.js";
import SimpleHours from "./simpleHours.js";
import FiveHours from "./fiveHours.js";
import LampSeconds from "./lampSeconds.js";

export class Main {
    intToSeconds(number) {
        return number * 1000;
    }

    intToMinutes(number) {
        return number * 60 * 1000;
    }

    intToHours(number) {
        return number * 60 * 60 * 1000;
    }

    simpleMinutes(timestamp) {
        return SimpleMinutes(timestamp);
    }

    fiveMinutes(timestamp) {
        return FiveMinutes(timestamp);
    }

    simpleHours(timestamp) {
        return SimpleHours(timestamp);
    }

    fiveHours(timestamp) {
        return FiveHours(timestamp);
    }

    lampSeconds(timestamp) {
        return LampSeconds(timestamp);
    }
}