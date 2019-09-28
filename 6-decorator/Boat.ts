
@classDecorator
class Boat {    
    //Property decorator on static member
    @propDecorator
    static shape: string = "boatLike"

    //Parameter decorator on constructor
    constructor(@parameterDecorator public length: number) {}

    //Method decorator factory on instance member
    @logErrorFactory('Failed To Navigate custom message')
    navigate() {
        throw new Error("Navigation Error")
    }

    //Method decorator on static member
    @logError
    static autoPilot(): void {
        console.log("STATIC AUTO PILOT")
    }

    //Property decorator on instance member
    @propDecorator
    color: string = "red"    

    //Parameter decorator only on instance member
    testOnly(@parameterDecorator myTest:string, @parameterDecorator otherTest: number): void {
        console.log("Test Only")
    }

    //Parameter decorator wrapped by multiple method decorators on instance member
    @testDecorator2
    @logError
    pilot(@parameterDecorator speed: string, @parameterDecorator choppyWaters: boolean): void {
        console.log("speed param is - ")
        //This would be undefined because the method decorators are wrapping this method but not passing the params
        console.log(speed)
        if(speed==='fast')
            console.log('swish')
        else
            console.log('so slowwww')
        //throw new Error("Pilot Error")
    }

    //Accessor decorator on instance member
    @propDecorator
    get formatterColor():string {
        return `The color of the boat is ${this.color}`
    }
  }

  //A parameter decorator can only be used to observe that a parameter has been declared on a method.
  function parameterDecorator(target: any, key: any, index: number): void {
    console.log("\nPARAMETER DECORATOR")
      console.log(target)
      console.log(key, index)
  }

  function classDecorator(constructor: Function) {
      console.log(constructor)
  }

  function logError(target: any, key: string, desc: PropertyDescriptor): void {
    console.log("\nLOG ERROR DECORATOR")
      console.log(target)
      console.log(key)
      console.log(desc)
      const method = desc.value
      const catchError = function() {
        try {
            console.log("THE logError METHOD IS  - ")
            console.log(method)
            console.log(this)
            console.log(arguments)
            method.apply(this, arguments)
        } catch(e) {
            console.log('*** Error catched in log error decorator ***')
        }
    }
      desc.value = catchError
  }

  function logErrorFactory(errorMessage: string) {
    return function(target: any, key: string, desc: PropertyDescriptor): void {
        console.log("\nLOG ERROR DECORATOR FACTORY")
          console.log(target)
          console.log(key)
          console.log(desc)
          const method = desc.value
          const catchErrorInFactory = function() {
            try {
                console.log("THE logErrorFactory METHOD IS  - ")
                console.log(method)
                console.log(this)
                console.log(arguments)
                method.apply(this, arguments)
                method()
            } catch(e) {
                console.log(`*** ${errorMessage} ***`)
            }
        }
          desc.value = catchErrorInFactory
      }
  }

  function testDecorator2(target: any, key: string): void {
      console.log("\nTEST DECORATOR 2")
      console.log(target)
      console.log(key)
  }

  function propDecorator(target: any, key: string) {
    console.log("\nPROP DECORATOR")
    console.log(target)
    console.log(key)
    /**You cannot access target[key] here because 1) target is the prototype of the actual class in which
    * the decorator is being used, and that prototype doesn't have the property in it. The prototype only has the methods
    * defined as it's properties (see simplified version). 2)The decorator runs at the time of class definition and
    * so the "key" property is not tied to any instance of the affected class
    */
    console.log(target[key])
  }
  
  const boat = new Boat(10)
  boat.pilot('fast', false)
  boat.navigate()

  /**
    * First all decorators for each of the specified instance members are applied, the order of application is as 
    * per the linear order they had been declared in the source code.
    * 
    * Post that, all the decorators for each of the specified static members are applied in the order of their declaration.
    * 
    * If a single (instance or static) member involves more than one decorator then, first the param decorator is applied,
    * then the method decorator followed by the property/accessor decorator are applied over it.
    * 
    * After the decorators for instance and static members are applied, then the param decorators (if any) in the 
    * constructor are applied followed by the application of class decorator over it.
    */