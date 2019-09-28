var __decorate = function (decorators, target, key, desc) {
    desc = Object.getOwnPropertyDescriptor(target, key)

    //Run each decorator method with the required arguments from the target one by one
    for (var i = decorators.length - 1; i >= 0; i--) {
        const currentDecorator = decorators[i]
        currentDecorator(target, key, desc)
    }
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
