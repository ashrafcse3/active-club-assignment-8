const addToDb = time => {
    localStorage.setItem('break-time', time);
}

const getStoredTime = () => {
    let breakTime = 0;
    const storedTime = localStorage.getItem('break-time');
    if (storedTime) {
        breakTime = JSON.parse(storedTime);
    }

    return breakTime;
}

export {
    addToDb,
    getStoredTime
}