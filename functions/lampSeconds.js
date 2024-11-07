function LampSeconds(timestamp) {
    let lampSeconds = false;
    
    if (new Date(timestamp).getSeconds() % 2 === 0) {
        lampSeconds = true;
    }

    return lampSeconds;
}

export { LampSeconds };