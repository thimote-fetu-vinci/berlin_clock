function SimpleHours(timestamp) {
    let simpleHours = [false, false, false, false];

    for (let i = 0; i < new Date(timestamp).getHours() % 5; i++) {
        simpleHours[i] = true;
    }

    return simpleHours;
}

export default SimpleHours;