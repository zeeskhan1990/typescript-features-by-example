import axios from 'axios'

//Interfaces are used to define the structure of a variable
interface Todo {
    id: number,
    title: string,
    completed: boolean
}

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
      const todo = response.data as Todo
      console.log(response.data)

  })

  const logTodo = (id:number | string, title:string, completed:boolean) => {
    
  }

  let point: {x:number; y:number} = {
      x:5,
      y:10
  }

  const logNumber: (i:number) => void = (i: number): void => {
      console.log(i)
  }

  const myjson = '{"x":10, "y":20}'
  const coordinates = JSON.parse(myjson)

  //In case of desctructing you would have to be specific about it being a destructure first and then that the property
  //in that destructure is of a certain type
  const forecast = ({date, weather}: {date: Date, weather: string}): void => {

  }

  const profile = {
      name: 'hello',
      age: 23,
      coords: {
          lat:0,
          long:15
      },
      setAge(age:number): void {
          this.age = age
      }
  }
  //The parentheses indicate that it is a destructure first , and then define the property type definition inside it
  const {age} : {age: number} = profile

  const {coords}: {coords: {lat: number, long: number}} = profile

  const carMakers: string[] = ['Nissan', 'Mitsubishi']    
  const carsByMake = [
      ['f150'],
      ['corolla']
  ]

  
  const [toy, ...dupcar]: string[] = carMakers
  //Array
  const pepsi: (string | boolean | number)[] = ['brown', true, 40 ]

  //Tuple - Ordered list of items. Where the order of items is restricted by the order of types mentioned within the parentheses
  const thumpsup: [string, boolean, number] = ['brown', true, 40 ]

  //type is an annotation spelled out
  type Drink = [string,  boolean, number]
  const sprite: Drink = ['white', true, 30]  

  type SpriteT = (string | boolean | number)[]
  type myObj = {age: number, name: string}

  //interface is a new type describing the property name & types

    type Teportable = {
    summary(): string
  }

  interface Vehicle {
      name: string,
      year: Date,
      broken: boolean
  }

//Reporable interface having only the summary methid 
interface Reportable {
    summary(): string
}

//A variable 'oldCar' marked as type of Reportable having ONLY the summary method as Reportable
const oldCar: Reportable = {
    summary() {
        return this.name
    }
}

//A variable 'newCar' marked as type of Reportable having the summary method in addition to other properties
//This causes type error, 'Object literal may only specify known properties', that means newCar must match Reportable exactly
const newCar: Reportable = {
    name: "maruti",
    year: new Date(),
    broken: false,
    summary() {
        return this.name
    }
}

//A function "report" taking an input of type Reportable
function report(input: Reportable):string {
    return ""
}

//Both 'oldCar' and 'newCar' are valid inputs here
report(oldCar)
report(newCar)

  