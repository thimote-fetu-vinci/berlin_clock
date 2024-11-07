function SimpleMinutes(timestamp) {
    let minutes = [false, false, false, false];

    for (let i = 0; i < new Date(timestamp).getMinutes() % 5; i++)
        minutes[i] = true;
    return minutes;
}

export { SimpleMinutes };