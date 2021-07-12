// Done with Salman Khateeb
class Ninja {
    constructor (name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log (`Ninja name ${this.name}`)
    }

    showStats() {
        console.log (`Ninja Status for: name: ${this.name}, Strength is : ${this.strength}, Health is : ${this.health}, Speed is : ${this.speed},   `)
    }

    drinkSake() {
        this.health +=10;
        console.log (this.health);
    } 
}

const Ninja1 = new Ninja(`Hyabusa`);
Ninja1.sayName();
Ninja1.showStats();
Ninja1.drinkSake();