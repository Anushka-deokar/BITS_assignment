/*
*Assignment 4: Working with map(), filter(), and **reduce() 
Task 1: Use map() to transform data 
● Create an array of product objects with properties name, price, and category. 
● Use map() to create a new array with product names in uppercase. 
Task 2: Use filter() to extract specific data 
● Use filter() to create an array of products that belong to the 'Electronics' category. 
Task 3: Use reduce() to calculate a total 
● Use reduce() to calculate the total price of all products in the array. 
Task 4: Combine map(), filter(), and reduce() 
● Create a function that calculates the total price of products from a specific category using 
map(), filter(), and reduce(). */


let product = [
    {
        name: 'Samsung S24',
        price: 109990,
        category: 'Electronics'
    },
    {
        name: 'T-shirt',
        price: 1000,
        category: 'Clothing'
    },
    {
        name: 'Eraser',
        price: 5,
        category: 'Stationary'
    },

    {
        name: 'Pen',
        price: 10,
        category: 'Stationary'
    },
    {
        name: "Earphones",
        price: 499,
        category: "Electronics"
    },
    {
        name: "Wireless Mouse",
        price: 799,
        category: "Electronics"
    },
    {
        name: "Power Bank",
        price: 1200,
        category: "Electronics"
    },
    {
        name: "Bluetooth Speaker",
        price: 1500,
        category: "Electronics"
    }
];

const Product_names = product.map(product => product.name.toUpperCase());
console.log(Product_names);

const electronicsProducts = product.filter(product => product.category === "Electronics");
console.log(electronicsProducts);


const totalPrice = product.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price of all products:", totalPrice);



function calculateTotalPriceByCategory(category) {
    return product
        .filter(product => product.category === category)
        .map(product => product.price)
        .reduce((sum, price) => sum + price, 0);
}

const totalPriceElectronics = calculateTotalPriceByCategory("Electronics");
console.log("Total Price of Electronics:", totalPriceElectronics);

