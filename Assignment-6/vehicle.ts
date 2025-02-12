class Vehicle {
    constructor(
        public brand: string,
        public model: string,
        public rentPricePerDay: number
    ) { }

    calculateRentalCost(days: number): number {
        return this.rentPricePerDay * days;
    }
}


class Car extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.calculateRentalCost(days) * 0.95;
    }
}


class Bike extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.calculateRentalCost(days) * 0.9;
    }
}

class Truck extends Vehicle {
    calculateRentalCost(days: number): number {
        return super.calculateRentalCost(days) + (days > 5 ? 500 : 0);
    }
}

const myCar = new Car("Tesla", "Model 3", 120);
const myBike = new Bike("Ducati", "Monster", 70);
const myTruck = new Truck("Volvo", "FH16", 250);


console.log(`Car Rental Cost: $${myCar.calculateRentalCost(300)}`);
console.log(`Bike Rental Cost: $${myBike.calculateRentalCost(100)}`);
console.log(`Truck Rental Cost: $${myTruck.calculateRentalCost(500)}`);
