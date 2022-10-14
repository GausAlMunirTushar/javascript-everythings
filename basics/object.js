const person = {
    name    : 'Max',
    age     : 29,
    address : "Rangpur",
    greet   : function() {
                console.log('Hi, I am ' + this.name);
    },
}
let name = person.name;
console.log(name);
person.greet();
let x = "Rahim"; // literal syntax
let y = new String("Karim"); // object syntax