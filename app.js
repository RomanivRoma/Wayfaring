// let people = [
//     {name: "Edward", age: 12, job: "Engineer"},
//     {name: "Oleg", age: 32, job: "Programmer"},
//     {name: "Mario", age: 22, job: "Plumber"},
//     {name: "Stone", age: 41, job: "Driver"},
//     {name: "Bill", age: 54, job: "Fisher"}
// ]
// let adults = people.filter(person => person.age >= 18)
// console.log(adults);


// function a(){
//     console.log(global + "Roma");
    
// }
// let global = "Hello"
// global = "ROma"
// a()

Number.prototype.plus = function(num){
    return this + num
}

console.log((2).plus(2));