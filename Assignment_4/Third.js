/*
1. Task: Create a program that continuously adds data to an array to simulate a memory 
leak. 
○ Monitor heap memory usage using Chrome DevTools or 
performance.memory. 
○ Implement a cleanup mechanism to prevent memory issues. 
○  Use Chrome DevTools to capture a memory snapshot and analyze retained 
objects to observe the simulated memory leak. 

*/

let memoryLeakArray = [];
function createMemoryLeak() {
    setInterval(() => {
        let largeObject = new Array(10000).fill(Math.random());
        memoryLeakArray.push(largeObject);
        console.log(`Array size: ${memoryLeakArray.length}`);


        if (memoryLeakArray.length > 100) {
            memoryLeakArray.splice(0, 50);
        }

    }, 1000);
}

createMemoryLeak();
