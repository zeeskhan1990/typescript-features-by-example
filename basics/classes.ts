class Vehicle {
    constructor(public color:string) {}
    drive(): void {
        console.log('chugga ue')
    }
    protected honk(): void {
        console.log('Beep')
    }
}

const vehicle = new Vehicle("red")
vehicle.drive()

class Car extends Vehicle {
    drive(): void {
        console.log('boooom')
        this.honk()
    }
}

const car = new Car("blue")
car.drive()
//car.honk()