//super class
class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`${this.destination} will take ${this.days}`);
    }
}

var portugal = new Holiday("Évora, Portugal", 20);

//portugal.info();

//sub class
class Expedition extends Holiday{
    constructor(destination, days, gear){
        //you are calling the destination and days from parent class so you dont need "this"
        super(destination, days);
        this.gear = gear;

    }

    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }

}


var trip_with_gear = new Expedition("Évora, Portugal", 20, ["Sunglasses", "Flags", "Camera"]);
trip_with_gear.info();