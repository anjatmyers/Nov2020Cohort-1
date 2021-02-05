
class AnotherPerson{
    constructor() {
        
    }
}

class Person extends AnotherPerson{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.counter = 0;
  }

  incrementCount(){
      this.counter++;
      return this.counter;
  }

  render(){

    //logic
    return (//jsx)
  }
  
}

let adam = new Person("Adam", "MacKinnon");
adam.incrementCount();
console.log(adam.incrementCount());


let ally = new Person("Ally", "Deeter");
ally.incrementCount();
ally.incrementCount();
ally.incrementCount();
console.log(ally.incrementCount());
