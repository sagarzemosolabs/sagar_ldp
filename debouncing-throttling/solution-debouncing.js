
async function simulate() {
    const actualWork = throttleWork(work, 500);
    for(let i = 0; i < 20; i++)  {
        await new Promise((resolve) => {
            const random = Math.floor(Math.random() * (700 - 300 + 1)) + 300;
            setTimeout(()=> {
                actualWork();
                resolve(1);
            }, random);
            })
    }
}

function throttleWork(work, interval) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            work();
        }, interval);
    }
}

function work() {
    console.log('Sending request to server...');
}

simulate();
