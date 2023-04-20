// function নাম long and descriptive দেয়ার চেষ্টা

// Bad Practice
function email(user){
    // implementation
}

// Good Practice
function sendEmailToUser(email){
    // implementation
}



// অনেক arguments avoid
// Bad Practice
function getProducts(fields, fromDate, toDate){
    // implementatin
}

// Good Practice
function getProducts({fields, fromDate, toDate}){
    // implementation
}


// default arguments use, not conditionals
// Bad
function createShape(type) {
    const shapeType = type || 'circle';
}

// Good Practice
function createShape(type = 'circle') {
    //
}


