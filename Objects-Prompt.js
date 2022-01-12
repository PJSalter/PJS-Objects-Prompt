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

//.......................... Attempt Two of StringToObject.....................//

const stringToObject = str => {
  //console.log(str)
  let newObj = {};
  if(str) {
    let splitStr = str.split(",");
  //console.log(splitStr)
  // input = array
  // output = function - for Each
  splitStr.forEach(el => {
    let newlySplit = el.split(":")
    //console.log(newlySplit)
    //console.log(newlySplit[0])
    newObj[newlySplit[0]] = newlySplit[1];
})
  }

return newObj
}

console.log(stringToObject("")); // Expected {}

console.log(stringToObject("a:1,b:2,c:3")); //Expected { a: "1", b: "2", c: "3" }

console.log(stringToObject("one:-1,two:hi there,three:what's that?")); // Expected { one: "-1", two: "hi there", three: "what's that?" }

//...............................Going Shopping Object Solution.............................//

//Write a function shoppingList that accepts a single parameter, a string. The string is a list of ingredients, separated by a comma, formatted as below:

//“2 tomatoes, 1 egg, 3 pumpkins”

//The function shoppingList should return an object where the keys are the ingredient names, and the values are the number of the ingredients needed.

const shoppingList = str => {
  //console.log(str)
  // the input is string
  let splitting = str.split(", ");
  //console.log(splitting)
  // output will be new array of arrays
  let newOrder = splitting.map(x => {
    //console.log(x)
    if(x) {
       let seperate = x.split(' ').reverse();
       //console.log(seperate)
       if(seperate[1] !== '0') {
           return seperate
       }
    }
  })

  let result = newOrder.filter(s => {
    //console.log(s)
    if(s !== undefined){
      return s
    }
  })
  //console.log(result)
  return Object.fromEntries(result)
}

console.log(shoppingList("2 tomatoes, 1 egg, 3 pumpkins"));
// returns { tomatoes: 2, egg: 1, pumpkins: 3 }

console.log(shoppingList(""));
// returns {}

console.log(shoppingList("2 tomatoes, 1 egg, 0 pumpkins"));
// returns { tomatoes: 2, egg: 1 }



//................................Map Object Solution...................................//

//Write a function mapObject that takes two parameters: an object obj and a function fn.

//mapObject should return a new object whose keys are the same as those of obj, and whose values are the result of calling fn with the values of obj.

const mapObject = (obj, fn) => {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = fn(obj[key])
    return result
  }, {})
}


console.log(mapObject({ a: 1, b: 2 }, (n) => n + 2));
// returns { a: 3, b: 4 }

console.log(mapObject({ greeting: 'hi there, ', goodbye: 'see you later, ' }, (s) => s + 'Yvonne'));
// returns { greeting: 'hi there, Yvonne', goodbye: 'see you later, Yvonne' }