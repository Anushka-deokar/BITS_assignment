"use strict";
class Employee {
    constructor(name, id, salary = 0) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.5;
    }
}
class Engineer extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.3;
    }
}
class Intern extends Employee {
    calculateBonus() {
        return this.getSalary() * 0.1;
    }
}
const manager = new Manager('Anushka', 21, 40000);
console.log(`Your Bonus is : ${manager.calculateBonus()}`);
const engineer = new Engineer('XYZ', 26, 30000);
console.log(`Your Bonus is : ${engineer.calculateBonus()}`);
const intern = new Intern('ABC', 32, 10000);
console.log(`Your Bonus is : ${intern.calculateBonus()}`);