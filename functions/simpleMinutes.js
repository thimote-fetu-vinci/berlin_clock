function SimpleMinutes(timestamp) {
    let simpleMinutes = [false, false, false, false];
    
    for (let i = 0; i < new Date(timestamp).getMinutes() % 5; i++) {
        simpleMinutes[i] = true;
    }
    return simpleMinutes;
}

module.exports = SimpleMinutes;