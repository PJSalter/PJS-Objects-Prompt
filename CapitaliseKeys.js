//Capitalise keys 
//Write a function capitaliseKeys, which takes an object as an argument, and returns a new object with the same key-value pairs except all the keys have been capitalised.

//Attempt 1

function capitaliseKeys(obj) {
    var keys = Object.keys(obj)
    //console.log(keys);
    return keys.reduce((acc, key) => {
      acc[key.toUpperCase()] = obj[key];
    return acc
    }, {});
  }


console.log(capitaliseKeys({ a: 1, b: 2, c: 3 })); //Expected: { A: 1, B: 2, C: 3 }

console.log(capitaliseKeys({ Hello: "hi" })); //Expected: { HELLO: 'hi' }

console.log(capitaliseKeys({})); //Expected: {}