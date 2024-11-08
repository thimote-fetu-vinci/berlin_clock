function FiveHours(timestamp) {
    let fiveHours = [false, false, false, false];
    
    for (let i = 0; i < Math.floor(new Date(timestamp).getHours() - 1) / 5; i++) {
        fiveHours[i] = true;
    }

    return fiveHours;
}

export default FiveHours;