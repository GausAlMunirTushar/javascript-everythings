// variable meaningful name
// BAD Practice
let daysll = 10;


// Good Practice
const MAX_ALLOWED_LOGIN_EXPIRATINO_DAYS = 30;
let daysSinceLastLogin = 10;




// variable name extra word avoid

// BAD Practice
let nameValue;
let theProduct;

// GOOD Practice
let name;
// let product;




// BAD Practice
// const products = ['T-shirt', 'Watch', 'Panjabi']

// products.forEach((p) => {
//     doSomething();
//     DoSomethingElse(p);
// })

// GOOD Practice
const products = ['T-shirt','Watch']
products.forEach((product) => {
    doSomething();
    doSomethingElse(product);
})



// unneceesary context add
// Bad Practice 
const product = {
    productId: 1,
    productName: "T-shirt",
    productPrice: 99.44,
    productUnits: 12,
}

// Good Practice
const product1 = {
    id: 1,
    name: 'T-shirt',
    price: 4.55,
    units: 12,
}