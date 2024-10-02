function demoPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10); 
        if (randomNumber >= 5) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

const promises = Array(20).fill(null).map(() => demoPromise());

async function processPromises() {
    for (const promise of promises) {
        try {
            const result = await promise;
            console.log(`Resolved: ${result}`);
        } catch (error) {
            console.log(`Rejected: ${error}`);
        }
    }
}

processPromises();

// Promise.all(promises)
//     .then(results => {
//         console.log("All resolved:", results);
//     })
//     .catch(error => {
//         console.log("At least one promise was rejected:", error);
//     });

