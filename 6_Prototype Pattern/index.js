const createDog = (name, age) => ({
  name,
  age,
  bark() {
    console.log(`${name} is barking`);
  },
  wagTail() {
    console.log(`${name} is wagging their tail`);
  },
});

const dog1 = createDog("Max", 4);
const dog2 = createDog("Sam", 2);
const dog3 = createDog("Spot", 7);

// console.log(dog1);

// We are unnecessary adding bark and wagTail methods to each dog object. Under the hood, we are creating two new functions for each dog object which uses memory.
