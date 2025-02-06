/*
Assignment 1: Callback Functions 
1. Task: Write a function fetchData that simulates fetching data from a server using a 
callback function. 
○ The function should take a callback that processes the data after a delay of 2 
seconds. 
○ Use setTimeout to simulate the server delay. 
○ The data should be an array of user names. Bonus Task: Implement error 
handling in the callback function to simulate a case where the server might fail.


*/



function fetchData(callback) {
    console.log("Fetching the data from the server ...");

    setTimeout(() => {
        const isError = Math.random() > 0.5; // random error 

        if (isError) {
            callback(new Error("Failed to fetch data"), null);
        } else {
            const users = ["Alice", "Bob", "Charlie"];
            callback(null, users);
        }
    }, 2000);
}


function handleResponse(error, data) {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Fetched Users:", data);
    }
}


fetchData(handleResponse);
