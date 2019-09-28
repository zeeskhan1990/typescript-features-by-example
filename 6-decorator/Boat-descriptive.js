"use strict";
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
        console.log("Inside __decorate, the values of decorators, target, key and desc are :  ")
        console.log(decorators)
        console.log(target)
        console.log(key)
        console.log(desc)
        
    	var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
        console.log('Inside __decorate after assignment, the values of c, desc, r and d are : -')
        console.log(c)
        console.log(desc)
        console.log(r)
        console.log(d)
        for (var i = decorators.length - 1; i >= 0; i--) {
        	if (d = decorators[i]) {
            console.log("Current decorator ", i)
            console.log(d)
            let temp;
            if(c<3) {
            	console.log("c < 3")
              temp = d(r)
              console.log("temp is - ")
              console.log(temp)
            } else {
            	if(c>3) {
              	console.log("c > 3")
              	temp = d(target, key, r)
                console.log("temp is - ")
                console.log(temp)
              } else {
              	console.log("c = 3")
              	temp = d(target, key)
                console.log("temp is - ")
                console.log(temp)
              }
            }
            r = temp || r
          	//r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            console.log("r is as of now --- ")
            console.log(r)
          } 
        }
        
        if(c>3) {
        	if(r) {
          	console.log("c > 3, and r is truthy")
          	console.log("About to invoke object defineProperty")
            console.log("Target, key and r is --- ")
            console.log(target)
            console.log(key)
            console.log(r)
            Object.defineProperty(target, key, r)
            console.log("TARGET AFTER THE EXECUTION - ")
            console.log(target)
          }
        }
       console.log(r)
       return r
    //return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
    return function (target, key) { 
        decorator(target, key, paramIndex); 
    }
};

/** Boat class definition */

var Boat = /** @class */ (function () {
    function Boat(length) {
        this.length = length;
        this.color = "red";
    }

    Boat.prototype.navigate = function () {
        throw new Error("Navigation Error");
    };

    Boat.autoPilot = function () {
        console.log("STATIC AUTO PILOT");
    };

    Boat.prototype.testOnly = function (myTest) {
        console.log("Test Only");
    };

    Boat.prototype.pilot = function (speed, choppyWaters) {
        console.log("speed param is - ");
        console.log(speed);
        if (speed === 'fast')
            console.log('swish');
        else
            console.log('so slowwww');
        //throw new Error("Pilot Error")
    };
    Object.defineProperty(Boat.prototype, "formatterColor", {
        get: function () {
            return "The color of the boat is " + this.color;
        },
        enumerable: true,
        configurable: true
    });

    /** Decorator applications */

    //instance member decorators
    Boat.shape = "boatLike";
    __decorate([
        logErrorFactory('Failed To Navigate custom message')
    ], Boat.prototype, "navigate", null);

    __decorate([
        propDecorator
    ], Boat.prototype, "color", void 0);

    __decorate([
        __param(0, parameterDecorator)
    ], Boat.prototype, "testOnly", null);

    __decorate([
        testDecorator2,
        logError,
        __param(0, parameterDecorator), __param(1, parameterDecorator)
    ], Boat.prototype, "pilot", null);

    __decorate([
        propDecorator
    ], Boat.prototype, "formatterColor", null);

    //static member decorators
    __decorate([
        propDecorator
    ], Boat, "shape", void 0);

    __decorate([
        logError
    ], Boat, "autoPilot", null);

    //Parameter decorator on constructor wrapped by the class decorator
    Boat = __decorate([
        classDecorator,
        __param(0, parameterDecorator)
    ], Boat);
    return Boat;
}());

/**
 * Decorator functions
 */
function parameterDecorator(target, key, index) {
    console.log("\nPARAMETER DECORATOR");
    console.log(target);
    console.log(key, index);
}
function classDecorator(constructor) {
    console.log(constructor);
}
function logError(target, key, desc) {
    console.log("\nLOG ERROR DECORATOR");
    console.log(target);
    console.log(key);
    console.log(desc);
    var method = desc.value;
    var catchError = function () {
        try {
            method();
        }
        catch (e) {
            console.log('*** Error catched in log error decorator ***');
        }
    };
    desc.value = catchError;
}
function logErrorFactory(errorMessage) {
    return function (target, key, desc) {
        console.log("\nLOG ERROR DECORATOR FACTORY");
        console.log(target);
        console.log(key);
        console.log(desc);
        var method = desc.value;
        var catchErrorInFactory = function () {
            try {
                method();
            }
            catch (e) {
                console.log("*** " + errorMessage + " ***");
            }
        };
        desc.value = catchErrorInFactory;
    };
}
function testDecorator2(target, key) {
    console.log("\nTEST DECORATOR 2");
    console.log(target);
    console.log(key);
}
function propDecorator(target, key) {
    console.log("\nPROP DECORATOR");
    console.log(target);
    console.log(key);
    console.log(target[key]);
}
