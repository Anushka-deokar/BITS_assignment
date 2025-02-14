interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}


interface Manager extends Employee {
    teamSize: number;
}


class Department {
    private employees: Employee[] = [];

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }


    removeEmployee(id: number): void {
        this.employees = this.employees.filter(emp => emp.id !== id);
    }


    getTotalSalary(): number {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }


    listEmployees(): void {
        console.log("Employee List:", this.employees);
    }
}


class GenericStorage<T> {
    private storage: T[] = [];

    add(item: T): void {
        this.storage.push(item);
    }

    remove(item: T): void {
        this.storage = this.storage.filter(storedItem => storedItem !== item);
    }

    getAll(): T[] {
        return this.storage;
    }
}


function updateSalary<T extends Employee>(employee: T, newSalary: number): T {
    return { ...employee, salary: newSalary };
}


const emp1: Employee = { id: 21, name: "Anushka Deokar", position: "Software Developer", salary: 50000 };
const emp2: Employee = { id: 22, name: "XYZ ", position: "UI/UX Designer", salary: 45000 };


const manager: Manager = { id: 3, name: "Rakesh Sharma", position: "Team Leader", salary: 70000, teamSize: 5 };


const department = new Department();
department.addEmployee(emp1);
department.addEmployee(emp2);
department.addEmployee(manager);


department.listEmployees();


department.removeEmployee(1);
department.listEmployees();


console.log("Total Salary:", department.getTotalSalary());


const employeeStorage = new GenericStorage<Employee>();
employeeStorage.add(emp1);
employeeStorage.add(emp2);
console.log("Stored Employees:", employeeStorage.getAll());


const updatedEmp = updateSalary(emp1, 60000);
console.log("Updated Employee:", updatedEmp);

