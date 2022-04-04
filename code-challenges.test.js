// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("profileArray", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    expect(profileArray(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// FAIL  ./code-challenges.test.js
//  profileArray
//    ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//  ● profileArray › takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//    ReferenceError: profileArray is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function that takes in an array as a parameter
//2. Store the mapped array to a variable to be returned later
//3. Within the scope of the map, split the name of each value into an array and store the new array of name strings on a variable
//4. Map over the new array of name strings, isolating the first letter of each value and capitalizing it
//5. Return the value of the capitalized letter onto a sliced version of the word it used to belong to
//6. Return the array of capitalized words, joined with a space and concatenated with...
  //" is " with the space on both sides
  //the occupation value at the object index
  //a period
//7. Return the variable the of the original mapped array

const profileArray = (array) => {
  const sentence = array.map(value => {
    const nameArray = value.name.split(" ")
    const capitals = nameArray.map(v => {
      return ((v.charAt(0).toUpperCase()) + v.slice(1))
    })
    return capitals.join(" ") + " is " + value.occupation + "."
  })
  return sentence
}





// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("threemainders", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(threemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(threemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// FAIL  ./code-challenges.test.js
//  threemainders
//    ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//  ● threemainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//    ReferenceError: threemainders is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function that takes in an array as a parameter
//2. Declare a variable to store a filtered array
//3. Filter out all values that aren't the number primitive data type and store them on the recently declared variable
//4. Return the newly filtered array being mapped over with %3 performed on each iteration

const threemainders = (array) => {
  var filtered = array.filter(value => typeof value === 'number')
  return filtered.map(value => value % 3)
}

// PASS  ./code-challenges.test.js
//  threemainders
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3





// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sumOfTheCubes", () => {
const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumOfTheCubes(cubeAndSum1)).toEqual(99)
    expect(sumOfTheCubes(cubeAndSum2)).toEqual(1125)
  })
})

// FAIL  ./code-challenges.test.js
//  sumOfTheCubes
//    ✕ takes in an array of numbers and returns the sum of all the numbers cubed
//  ● sumOfTheCubes › takes in an array of numbers and returns the sum of all the numbers cubed
//    ReferenceError: sumOfTheCubes is not defined

// b) Create the function that makes the test pass.

//PSEUDOCODE
//1. Create a function that takes an array as a parameter
//2. Declare a variable for adding the cubed values and storing the updated result
//3. Map over the array where each iterated value is being cubed and added to the recently declared variable
//4. Return the variable outside of the scope of the map

const sumOfTheCubes = (array) => {
  var sum = 0
  array.map(value => {
    sum += (value ** 3)
  })
  return sum
}

// PASS  ./code-challenges.test.js
//  sumOfTheCubes
//    ✓ takes in an array of numbers and returns the sum of all the numbers cubed

//ALL TESTS
// PASS  ./code-challenges.test.js
//  profileArray
//    ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//  threemainders
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//  sumOfTheCubes
//    ✓ takes in an array of numbers and returns the sum of all the numbers cubed
//    Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
