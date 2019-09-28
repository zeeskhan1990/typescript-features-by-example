import "reflect-metadata"

const plane = {
    color: 'red'
}


//It is like assigning an invisible property called 'note' with it's value being 'hi there' into the plane object
Reflect.defineMetadata('note', 'hi there', plane)
console.log(plane)
console.log(Reflect.getMetadata('note', plane))

Reflect.defineMetadata('propertyNote', 'hi', plane, 'color')
console.log(Reflect.getMetadata('propertyNote', plane, 'color'))

@printMetadata
class Aeroplane {
    color: string = "red"

    @markFunctionFactory('The value of my marked secret!')
    @markFunction
    fly(): void {
        console.log('rolls royce e90 engine')
    }

    @markFunction
    park(): void {
        console.log('Kempegowda International Airport')
    }
}

function markFunction(target: any, key: string): void {
    Reflect.defineMetadata('secret', `${key}-mark`, target, key)
}

function markFunctionFactory(secretInfo: string) {
    return function(target: any, key: string): void {
        Reflect.defineMetadata('markedSecret', secretInfo, target, key)
    }
}

function printMetadata(target: Function): void {
    //Loop through all the method properties defined in the classs
    for(let key in target.prototype) {
        console.log('In print metadata --- ')
        //Retrieve all metadata with the name 'secret' in the methods of the class
        console.log(Reflect.getMetadata('secret', target.prototype, key))
    }
}


/* const secret = Reflect.getMetadata('secret', Aeroplane.prototype, 'fly')
console.log(secret) */

const markedSecret = Reflect.getMetadata('markedSecret', Aeroplane.prototype, 'fly')
console.log(markedSecret)