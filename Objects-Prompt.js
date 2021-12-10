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

//...............StringToObject..............//

//Write a function stringToObject

//stringToObject takes one parameter, a string. The string is made up of key-value pairs formatted as follows: “key1:value1,key2:value2,…”

//stringToObject should return an object made up of the key-value pairs in the string. Assume all values are strings.

//Examples:

//write up function variable with name and param

const stringToObject = str => {
  //console.log(str)
  //assign an empty array
  let newArr = [];

//splitting into array
  let splitting = str.split(",");
  //console.log(splitting)

  //iterating with for loop
  for(let i = 0; i < splitting.length; i++){
    let el = splitting[i].trim().split(":");
    //push into empty array
    newArr.push(el)
  }
  //console.log(newArr)
  return newArr.reduce((acc, currentValue) => {
      //console.log(acc[currentValue[0] = currentValue[1]]);
      acc[currentValue[0]] = currentValue[1];
  return acc;
  //turn the array into an object
  }, Object.fromEntries(newArr));
}

console.log(stringToObject("")); // Expected {}

console.log(stringToObject("a:1,b:2,c:3")); //Expected { a: "1", b: "2", c: "3" }

console.log(stringToObject("one:-1,two:hi there,three:what's that?")); // Expected { one: "-1", two: "hi there", three: "what's that?" }

//Write a function mapObject that takes two parameters: an object obj and a function fn.

//mapObject should return a new object whose keys are the same as those of obj, and whose values are the result of calling fn with the values of obj.