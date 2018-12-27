const house = ['Emma', 'BK', 'NK', 'Rachel', 'Me'];
let lowercaseNames = [];

// Basic for loop
// for (let i=0; i < house.length; i++){
//   console.log(house[i]);
// }




//Basic forEach loop - should be used over for loops.
// house.forEach(livingThing => 
//   console.log(livingThing));




//Basic forEach loop that changes the names to lowercase
// house.forEach(name => {
//   let lowercaseHouse = name.toLowerCase();
//   lowercaseNames.push(lowercaseHouse);
// })
// console.log(lowercaseNames);



//Add all values of an array with forEach - Total variable and console HAVE to be outside of the forEach for it to work!

// const prices = [6.75, 3.10, 4.00, 8.12];
// let total = 0;

// prices.forEach(price =>{
//   total += price;
// })
// console.log(total);


//Get all names that start with S
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
let sNames = [];

names.forEach(name => {
  if(name.charAt(0) == "S"){
    sNames.push(name);
  }
})

console.log(sNames)