function FiveHours(timestamp) {
    let fiveHours = [false, false, false, false];
    
    for (let i = 0; i < new Date(timestamp).getHours()-1 % 5; i++) {
        fiveHours[i] = true;
    }

    return fiveHours;
}

export { FiveHours };