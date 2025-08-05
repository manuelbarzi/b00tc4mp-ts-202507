interface IMachine {
    start(): void;
    stop(): void;
    status(): string;
}

abstract class Machine implements IMachine {
    protected isRunning: boolean = false;
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    start() {
        this.isRunning = true;

        console.log(`${this.name} started.`);
    }

    stop() {
        this.isRunning = false;

        console.log(`${this.name} stopped.`);
    }

    status() {
        return this.isRunning ? `${this.name} is running.` : `${this.name} is stopped.`;
    }
}

class Roomba extends Machine {
    constructor() {
        super("Roomba");
    }

    mapHouse(): void {
        if (this.isRunning) {
            console.log("Roomba is mapping the house.");
        } else {
            console.log("Roomba cannot map the house because it is stopped.");
        }
    }
}

const myRoomba = new Roomba();

myRoomba.start();
console.log(myRoomba.status());
myRoomba.mapHouse();

myRoomba.stop();
console.log(myRoomba.status());
myRoomba.mapHouse(); // Should indicate that it cannot map the house because it is stopped

class Thermomix extends Machine {
    constructor() {
        super("Thermomix");
    }

    cook(): void {
        if (this.isRunning) {
            console.log("Thermomix is cooking.");
        } else {
            console.log("Thermomix cannot cook because it is stopped.");
        }
    }
}

const myThermomix = new Thermomix();

myThermomix.start();
console.log(myThermomix.status());
myThermomix.cook();

myThermomix.stop();
console.log(myThermomix.status());
myThermomix.cook(); // Should indicate that it cannot cook because it is stopped


class Lamborghini extends Machine {
    constructor() {
        super("Lamborghini");
    }

    run(): void {
        if (this.isRunning) {
            console.log("Lamborghini is running at high speed.");
        } else {
            console.log("Lamborghini cannot run because it is stopped.");
        }
    }
}

const myLamborghini = new Lamborghini();

myLamborghini.start();
console.log(myLamborghini.status());
myLamborghini.run();

myLamborghini.stop();
console.log(myLamborghini.status());
myLamborghini.run(); // Should indicate that it cannot run because it is stopped