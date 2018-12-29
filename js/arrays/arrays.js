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
// const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
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

// ---- Returns only even numbers
// const no3 = numbers.filter(number => number % 2 === 0);
// console.log(no3);

// const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
// let century20;
// century20 = years.filter(year => year <= 2000);





// ---------------------------------MAP---------------------------------
//Map returns a new array, leaving the original unchanged.
//Returns the same amount of items, but can transform them (Make them plural, change from Farenheit to Celcius, etc.)

//changes the numbers from a string to a number
// const strings = ['1','2','3','4','5'];
// const numbers = strings.map(string => parseInt(string, 10));
// console.log(numbers);


// //Capitalizes the first letter of each word.
// const fruits = ['apple', 'pear', 'cherry'];
// const captialFruit = fruits.map(fruit => fruit.charAt(0).toUpperCase() + fruit.substr(1));
// console.log(captialFruit);


// //Adds a $ and forces a .00 if it is missing.
// const prices = [5, 4.23, 6.4, 8.09, 3.20];
// const newPrices = prices.map(price => `$${price.toFixed(2)}`)
//     // Result: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]
// console.log(newPrices);


// //Abreviates the days of the week with the substr method;
// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let abbreviatedDays;
// // abbreviatedDays should be: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// abbreviatedDays = daysOfWeek.map(day => day.substr(0,3));
// console.log(abbreviatedDays);



// ---------------------------------------REDUCE------------------------------------
// Turns all items into 1 value

// let total = [0, 1, 2, 3].reduce(
//   (zzz, fur) => zzz + fur,
//   12
// );
// console.log(total);

// //adds all the prices
// const prices = [6.75, 3.10, 4.00, 8.12]
// const total = prices.reduce(
//   (zzz, fur) => zzz + fur,
//   0
// );
// console.log(total);

//Returns a count total for all names that start with G
// const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
// const gNames = names.reduce((count, name) => {
//   if(name[0] === 'G') {
//     return count + 1;
//   }
//   return count;
// },0);
//   console.log(gNames);


//     const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
// let numberOf503 = phoneNumbers.reduce((count, number) => {
//   if(number[1] === "5") {
//     return count +1;
//   }
//   return count;
// }, 0);

// console.log(numberOf503)




// -----------------------------------------ITERATION METHODS-------------------------

// //Adds the Filter and Map methods to return the 21st century years with A.D.
// const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
// let displayYears;

// displayYears = years
// .filter(year => year >= 2001)
// .map(year => year + " A.D.");

// console.log(displayYears);


//Filters an array of users based on Name
// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42}
// ];
// let names;
// names = users.filter(user => user.name !== 'Samir');
// names = users.map(user => `${user.name} is ${user.age} years old.`);
// console.log(names);


//return usersname and Age as object

/* create a new variable called shortUsers
    userObject is the accumulator
    userObject is initialized as an object (curly braces at end)
    user is the individual entry in the users array that is looped through
    userObject[user.name] is creating a new object key for each name
    user.age is the value being assigned to the new object key each time
    return userObject puts each object entry (each time through the loop) into shortUsers*/
// const shortUsers = users.reduce((userObject, user) => {
//   userObject[user.name] = user.age;
//   return userObject
// }, {}); //The curly braces are the initial value of the object

// console.log(shortUsers);


// const authors = [
//   { firstName: "Beatrix", lastName: "Potter" },
//   { firstName: "Ann", lastName: "Martin" },
//   { firstName: "Beverly", lastName: "Cleary" },
//   { firstName: "Roald", lastName: "Dahl" },
//   { firstName: "Lewis", lastName: "Carroll" }
// ];
// // fullAuthorNames should be: ["Beatrix Potter", "Ann Martin", "Beverly Cleary", "Roald Dahl", "Lewis Carroll"]
// let fullAuthorNames = authors.map( user => `${user.firstName} ${user.lastName}`);
// console.log(fullAuthorNames);


//TURNING AN ARRAY INTO AN OBJECT
//You HAVE to surround the returned object literal {} with () or else you get "Undefined"
// const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
// const users = userNames
//     .filter(user => user.charAt(0) === "S")
//     .map(user => ({name: user}));
//       console.log(users);
//     // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

////Turn Object into array
// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42},
//   {name: 'Shaniqua', age: 30},
//   {name: 'Marvin', age: 23},
//   {name: 'Sean', age: 47}
// ];
//     // Result: ['Angela', 'Beatrice', 'Shaniqua', 'Sean'];
// midUsers = users
//   .filter(user => user.age >= 30)
//   .map(user => user.name)
//   console.log(midUsers)

  //   const todos = [
  //     {
  //         todo: 'Buy apples',
  //         done: false
  //     },
  //     {
  //         todo: 'Wash car',
  //         done: true
  //     },
  //     {
  //         todo: 'Write web app',
  //         done: false
  //     },
  //     {
  //         todo: 'Read MDN page on JavaScript arrays',
  //         done: true
  //     },
  //     {
  //         todo: 'Call mom',
  //         done: false
  //     }
  // ];
  // // unfinishedTasks should be: ["Buy apples", "Write web app", "Call mom"]
  // let unfinishedTasks = todos
  //   .filter(todo => todo.done == false)
  //   .map(todo => todo.todo);
  //   console.log(unfinishedTasks)
  


// ----------------Filter  / Reduce


//   const products = [
//     { name: 'hard drive', price: 59.99 },
//     { name: 'lighbulbs', price: 2.59 },
//     { name: 'paper towels', price: 6.99 },
//     { name: 'flatscreen monitor', price: 159.99 },
//     { name: 'cable ties', price: 19.99 },
//     { name: 'ballpoint pens', price: 4.49 }
//   ];
//   //     // Result: { name: 'paper towels', price: 6.99 }
//   // let under10 = products
//   //   .filter(prod => prod.price < 10.00)
//   //   //Highest is the accumulated items, Product is the itterated items... So Highest.price > product.price is comparing the accumulated item price vs the itterated item price.
//   //   .reduce((highest, product) => {
//   //     if(highest.price > product.price) {
//   //       return highest;
//   //     }
//   //     return product;
//   //   }, {price: 0});

//   //   console.log(under10)

//   //Adds the Total of all products over $10
// let addedTotal = products
//     .filter(prod => prod.price > 10)
//     .reduce((prod, prod2) => prod + prod2.price,0)
//     .toFixed(2);
//     console.log(addedTotal)

// const purchaseItems = [
//   {
//       name: 'apples',
//       dept: 'groceries',
//       price: 2.49
//   },
//   {
//       name: 'bread',
//       dept: 'groceries',
//       price: 2.99
//   },
//   {
//       name: 'batteries',
//       dept: 'electronics',
//       price: 5.80
//   },
//   {
//       name: 'eggs',
//       dept: 'groceries',
//       price: 3.99
//   },
//   {
//       name: 't-shirts',
//       dept: 'apparel',
//       price: 9.99
//   }
// ];
// let groceryTotal = purchaseItems
//   .filter(item => item.dept === 'groceries')
//   .reduce((item, itemTotal) => item + itemTotal.price,0)
//   .toFixed(2);
//   console.log(groceryTotal)


// //Turning Multiple arrays into one
//  // Result: ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters', 'Finding Dory', 'Jaws', 'On the Waterfront']
// const movies = [
//   ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
//   ['Finding Dory'],
//   ['Jaws', 'On the Waterfront']
// ]

// const flatMovies = movies.reduce((arr, innerMovies) => [...arr, ...innerMovies], [])
// console.log(flatMovies)

// const users = [
//   {
//     name: 'Samir',
//     age: 27,
//     favoriteBooks:[
//       {title: 'The Iliad'},
//       {title: 'The Brothers Karamazov'}
//     ]
//   },
//   {
//     name: 'Angela',
//     age: 33,
//     favoriteBooks:[
//       {title: 'Tenth of December'},
//       {title: 'Cloud Atlas'},
//       {title: 'One Hundred Years of Solitude'}
//     ]
//   },
//   {
//     name: 'Beatrice',
//     age: 42,
//     favoriteBooks:[
//       {title: 'Candide'}
//     ]
//   }
// ];

//     // Result: ['The Iliad', 'The Brothers Karamazov', 'Tenth of December', 'Cloud Atlas', 'One Hundred Years of Solitude', 'Candide']

//     let books = users.map(book => book.favoriteBooks.map(title => title.title))
//     .reduce((arr, title) => [...arr, ...title],[])
//     console.log(books);


// // flattenedCustomerNames should be: ["John", "Sandy", "Tyrone", "Elizabeth", "Penny", "Barry", "Wanda", "Jamal", "Hayden", "Portia", "Pam", "Philip"]
// const customerNames = [
//   [ "John", "Sandy", "Tyrone", "Elizabeth", "Penny" ],
//   [ "Barry", "Wanda", "Jamal", "Hayden" ],
//   [ "Portia", "Pam", "Philip" ]
// ];
// let flattenedCustomerNames = customerNames.reduce((arr, customers) => [...arr, ...customers], []);

// console.log(flattenedCustomerNames)


