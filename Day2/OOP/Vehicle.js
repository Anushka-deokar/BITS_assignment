class Vehicle {
    constructor(brand, model, rentPricePerDay) {
        this.brand = brand;
        this.model = model;
        this.rentPricePerDay = rentPricePerDay;
    }

    calculateRentalCost(days) {
        return 0;
    }
}

class Car extends Vehicle {
    constructor(brand, model, rentPricePerDay) {
        super(brand, model, rentPricePerDay);
    }

    calculateRentalCost(days) {
        return `${this.brand} ${this.model}'s Rent for ${days} days is  ${this.rentPricePerDay * days}Rs.`;
    }
};

class Bike extends Vehicle {
    constructor(brand, model, rentPricePerDay) {
        super(brand, model, rentPricePerDay);
    }

    calculateRentalCost(days) {
        return `${this.brand} ${this.model}'s Rent for ${days} days is  ${this.rentPricePerDay * days}Rs.`;
    }
};

class Truck extends Vehicle {
    constructor(brand, model, rentPricePerDay) {
        super(brand, model, rentPricePerDay);
    }

    calculateRentalCost(days) {
        return `${this.brand} ${this.model}'s Rent for ${days} days is  ${this.rentPricePerDay * days}Rs.`;
    }
};


const car = new Car('Audi', 'A6', 6000);
const bike = new Bike('Yamaha', 'R15', 700);
const truck = new Truck('Tata', 'Prima', 9000);


console.log(car.calculateRentalCost(5));
console.log(bike.calculateRentalCost(5));
console.log(truck.calculateRentalCost(5));