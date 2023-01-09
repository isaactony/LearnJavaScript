//argument binding in javascript
let getAges = function() {

console.log(arguments);
}

getAges(23, 24,25);

function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));  // 20 
console.log(sum(7));        // 12
console.log(sum());          // 8

//
