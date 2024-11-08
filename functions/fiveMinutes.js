function FiveMinutes(timestamp) {
    let fiveMinutes = [false, false, false, false, false, false, false, false, false, false, false];
    
    for (let i = 0; i < Math.floor(new Date(timestamp).getMinutes() / 5); i++) {
        fiveMinutes[i] = true;
    }

    return fiveMinutes;
}

export default FiveMinutes;