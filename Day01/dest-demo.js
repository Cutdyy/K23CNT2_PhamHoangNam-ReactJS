//Destructuring
var array = [11, 22, 33, 44];
var [x,y] = array; // x=11, y=22
console.log("x:", x);
console.log("y:", y);

var [a, b, c] = array;
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

//object
const person = {
    name: "Nam",
    age: 19,
    city: "Hanoi"
};

console.log(person.name);
console.log(person.age);

const{name,city} = person;
console.log(name);
// console.log(age);
console.log(city);