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

class Sensei extends Ninja {
    constructor (name){
        super (name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
    }

    speakWisdom(){
        this.drinkSake();
        console.log (`What one programmer can do in one month, two programmers can do in two months.`);

    }

}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// const Ninja1 = new Ninja(`Hyabusa`);
// Ninja1.sayName();
// Ninja1.showStats();
// Ninja1.drinkSake();