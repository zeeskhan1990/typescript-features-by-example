import faker from 'faker'
import {Mappable} from './CustomMap'

//Typescript does an implicit structural check for type instead of nominally as Java does. Your object needs to just match the
//interface type structurally but don't have to declare it explicitly that it implements that interface.
//implements acts here as a means to confirm that the class does actually implement an interface but it's not mandatory
export class User implements Mappable{
    color: string = "red"
    name: string
    //There is no initialization here, it's just a declaration of type of location
    location: {
        lat: number,
        lng: number
    }

    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent() {
        return `User is ${this.name}`
    }
}
