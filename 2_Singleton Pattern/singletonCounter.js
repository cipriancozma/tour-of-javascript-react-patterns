let counter = 0;
// Singleton using a regular object

const counterObject = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

const singletonCounter = Object.freeze(counterObject); // freeze ensures that the newly created instance is not modifiable

export default singletonCounter;
