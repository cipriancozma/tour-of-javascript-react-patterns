// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log(`${this.name} is barking!`);
//   }
//   wagTail() {
//     console.log(`${this.name} is wagging their tail!`);
//   }
// }

// const dog1 = new Dog("Max", 4);
// const dog2 = new Dog("Sam", 2);
// const dog3 = new Dog("Joy", 6);
// const dog4 = new Dog("Spot", 8);

// Challenge

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  checkLastOnline() {
    console.log(`${this.fullName} was last online at ${Date.now()}`);
  }

  sendEmail() {
    console.log(`Email sent to ${this.email}`);
  }

  delete() {
    console.log(`User removed`);
  }
}

const user1 = new User("John", "Lennon", "john@lennon.com");
console.log(user1);
