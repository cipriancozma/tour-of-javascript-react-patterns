const person = {
  name: "Ciprian",
  age: 42,
  email: "ciprian@tech.com",
  country: "RO",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop} is ${target[prop]}`);
    // return target[prop];
    return Reflect.get(target, prop);
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    // target[prop] = value;
    // return true;
    Reflect.set(target, prop, value);
  },
});

console.log(personProxy.age);

personProxy.age = 30;
