//Capitalize the class name
class Pet {
  //Constructors outline the class properties
  constructor(animal, age, breed, sound) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
      this.sound = sound;
  }
  
  //getter method-not attached to object - Not shown when the object is written to the console or page.
  get activity() {
    const today = new Date();
    const hours = today.getHours();
  
  if(hours > 8 && hour <= 20) {
    return 'playing';
  } else {
    return 'sleeping';
  }

//Use this to return the value of the set Owner, don't forget the _
get owner(){
  return this._owner;
}

  //setter names CANNOT be the same as the property, notice the _ before the "this._owner".
  set owner(owner) {
   this._owner = owner;
    
  }
  
  speak() {
  console.log(this.sound)
  }
}


class Owner {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  
  set phone(phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, '');
  this.phone = phoneNormalized;
  }

  get phone() {
    return this._phone;
  }
}

const suze = new Pet('dog', 1, 'Chiweenie', 'ouuhhwauu');
const theMiss = new Pet('cat', 9, 'calico', 'hiss');

suze.owner = new Owner('Trent', '4 Nth 62nd ave');
suze.owner.phone = '(555) 555-5555';

console.log(suze.owner);

