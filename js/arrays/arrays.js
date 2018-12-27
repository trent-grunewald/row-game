const house = ['Emma', 'BK', 'NK', 'Rachel', 'Me'];
let lowercaseNames = [];

// -----Basic for loop
// for (let i=0; i < house.length; i++){
//   console.log(house[i]);
// }


//------Basic forEach loop - should be used over for loops.
// house.forEach(livingThing => 
//   console.log(livingThing));




//-------Basic forEach loop that changes the names to lowercase
// house.forEach(name => {
//   let lowercaseHouse = name.toLowerCase();
//   lowercaseNames.push(lowercaseHouse);
// })
// console.log(lowercaseNames);



//---------Add all values of an array with forEach - Total variable and console HAVE to be outside of the forEach for it to work!

// const prices = [6.75, 3.10, 4.00, 8.12];
// let total = 0;

// prices.forEach(price =>{
//   total += price;
// })
// console.log(total);


//---------Get all names that start with S
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
// let sNames = [];

// names.forEach(name => {
//   if(name.charAt(0) == "S"){
//     sNames.push(name);
//   }
// })

// console.log(sNames)


// ----------Get names in numbered order
// names.forEach((name, index) => console.log(`${index + 1}) ${name}`));





// -----------------------------FILTERS--------------

// ---Basic filter that removes the number 3
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const no3 = numbers.filter(number => number !==3);
// console.log(no3);

// ---- Returns only event numbers
// const no3 = numbers.filter(number => number % 2 === 0);
// console.log(no3);

const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20;

// century20 should be: [1989, 2000, 1999, 1973]
// Write your code below

// century20 = years.filter(year => year <= 2000);





// ---------------------------------MAP---------------------------------
//Map returns a new array, leaving the original unchanged.
//Returns the same amount of items, but can transform them (Make them plural, change from Farenheit to Celcius, etc.)

//changes the numbers from a string to a number
const strings = ['1','2','3','4','5'];
const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);


//Capitalizes the first letter of each word.
const fruits = ['apple', 'pear', 'cherry'];
const captialFruit = fruits.map(fruit => fruit.charAt(0).toUpperCase() + fruit.substr(1));
console.log(captialFruit);


//Adds a $ and forces a .00 if it is missing.
const prices = [5, 4.23, 6.4, 8.09, 3.20];
const newPrices = prices.map(price => `$${price.toFixed(2)}`)
    // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
console.log(newPrices);

