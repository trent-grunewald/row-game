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

const prices = [6.75, 3.10, 4.00, 8.12];
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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const no3 = numbers.filter(number => number !==3);
console.log(no3);

// ---- Returns only event numbers
const no3 = numbers.filter(number => number % 2 === 0);
console.log(no3);