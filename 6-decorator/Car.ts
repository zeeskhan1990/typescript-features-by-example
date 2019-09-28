const car = {make: 'Maruti', year: 2000}

/**
 * @returns { value: 'Maruti', writable: true, enumerable: true, configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(car, 'make'))

/**
 * Writable: If false, the value of the property can not be changed.
 * 
 * Configurable: If false, any attempts to delete the property or 
 * change its attributes (Writable, Configurable, or Enumerable) will fail.
 * 
 * Enumerable: If true, the property will be iterated over when a user does for (var prop in obj){} (or similar).
 */

Object.defineProperty(car, 'make', {writable: false})

/**
 * @returns { value: 'Maruti', writable: false, enumerable: true, configurable: true }
 * And we can't assign a value to make property in car
 */
console.log(Object.getOwnPropertyDescriptor(car, 'make'))