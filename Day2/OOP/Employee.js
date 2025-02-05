class Employee {
    #salary;

    constructor(name, id, salary) {
        this.name = name;
        this.#salary = salary;
        this.id = id;
    };

    getSalary() {
        return this.#salary;
    }

    calculateBonus() {
        console.log("Bonus !!");
    };

};

class Manager extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }

    calculateBonus() {
        console.log("Manager's Bonus");
        return this.getSalary() * 0.2;
    }
}

class Engineer extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }

    calculateBonus() {
        console.log("Engineer's Bonus");
        return this.getSalary() * 0.3;
    }
}
class Intern extends Employee {
    constructor(name, id, salary) {
        super(name, id, salary);
    }

    calculateBonus() {
        console.log("Intern's Bonus");
        return this.getSalary() * 0.1;
    }
}


const manager = new Manager('Anushka ', 21, 25000);
const engineer = new Engineer('Anushka', 22, 25000);
const intern = new Intern('Anushka', 31, 25000);

console.log(manager.getSalary());
console.log(engineer.getSalary());
console.log(intern.getSalary());


console.log(manager.calculateBonus());
console.log(engineer.calculateBonus());
console.log(intern.calculateBonus());
