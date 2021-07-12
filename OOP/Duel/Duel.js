class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost; 
    }

}

class Unit extends Card{
    
constructor(name, cost, power, resilience){
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
} 
attack(target){
    target.resilience = target.resilience - this.power; 
} 
}

class effect extends Card{
    constructor(name, cost, text, status, magnitude){
    super(name,cost);
    this.text = text;
    this.status = status;
    this.magnitude = magnitude;

 }

 HardAlgo(target){
     target.resilience = target.resilience + 3;
 }


 UnhandledPromise(target){
     target.resilience = target.resilience - 2; 
 }

 PairProgramming(target){
     target.power = target.power + 2; 
 }


}

const redNinja = new Unit("Red Belt Ninja",3,3,4);

const HardAlgo = new effect("Hard Algorithm",	2	, "increase target's resilience by 3	resilience", 3);

HardAlgo.HardAlgo(redNinja);

const BlackBeltNinja = new Unit("Black Belt Ninja",	4,	5,	4);

const UnhandledPromiseRejection = new effect("Unhandled Promise Rejection", 1 ,"reduce target's resilience by 2 resilience", 2);
UnhandledPromiseRejection.UnhandledPromise(redNinja);

const PairProgramming = new effect("Pair Programming	" , 3 ,	"increase target's power by 2	power",2);
PairProgramming.PairProgramming(redNinja);

redNinja.attack(BlackBeltNinja); 
console.log (BlackBeltNinja);