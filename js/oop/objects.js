class Pet {
  constructor(animal, age, breed, sound) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
      this.sound = sound;
  }
  
  //getter method-not attached to object
  get activity() {
    const today = new Date();
    const hours = today.getHours();
  
  if(hours > 8 && hour <= 20) {
    return 'playing';
  } else {
    return 'sleeping';
  }

//Use this to return the value of the set Owner
get owner(){
  return this._owner;
}

  //setter names CANNOT be the same as the property
  set owner(owner) {
   this._owner = owner;
    
  }
  
  speak() {
  console.log(this.sound)
  }
}


class Owner {
  constructor(name, address, phone) {
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
