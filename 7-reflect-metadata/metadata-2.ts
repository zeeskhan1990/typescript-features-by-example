import "reflect-metadata"

@controller
class Aeroplane {
    color: string = "red"

    @get('/login')
    fly(): void {
        console.log('rolls royce e90 engine')
    }
}



function get(path: string) {
    return function(target: any, key: string): void {
        Reflect.defineMetadata('path', path, target, key)
    }
}

function controller(target: Function): void {
    //Loop through all the method properties defined in the classs
    for(let key in target.prototype) {
        console.log('In controller --- ')
        //Retrieve all metadata with the name 'secret' in the methods of the class
        const path = Reflect.getMetadata('path', target.prototype, key)
        const middleware = Reflect.getMetadata('middleware', target.prototype, key)        
        //router.get(path, middleware, target.prototype[key])
        console.log(path)
    }
}