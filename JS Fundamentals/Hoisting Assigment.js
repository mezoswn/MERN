// Dont with Baraa Alzain

// 1  undefined
var hello;
console.log(hello);                                   
var hello = 'world'; // make var at the top   


// 2 magnet
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


// 3 super cool
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// 4 chicken
 // half chicken
var food = 'chicken';
console.log(food); // chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food); //half chicken
    var food = 'gone';
}


// 5 error --- we can not make var = function
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


// 6
console.log(genre); // undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //  rock
    var genre = "r&b"; 
    console.log(genre); // r&b
}
console.log(genre); // disco


// 7
dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); // seattle
    var dojo = "burbank";
    console.log(dojo); // burbank
}
console.log(dojo);   // san jose


// 8 - Bonus ES6: const
console.log(makeDojo("Chicago", 65)); // {hiring: true, name: "Chicago", students: 65}
console.log(makeDojo("Berkeley", 0)); // error
function makeDojo(name, students){
    const dojo = {}; // const immutable (we cannot change make it let or var and it will print "closed for now")
    dojo.name = name; // name chicago or berkeley
    dojo.students = students; // the students number 65 or 0
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
