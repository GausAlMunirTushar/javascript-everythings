// JavaScript Scope

var x = 24;

function myFunc() {
    x = 10;
    console.log(`${x} from myFunc()`)
}

myFunc();

console.log(x)
