import { isAllLetters, isValidEmail } from "./validator.js";

const user = {
  firstName: "John",
  lastName: "Doe",
  username: "johndoe",
  age: 42,
  email: "john@doe.com",
};

const userProxy = new Proxy(user, {
  get: (target, prop) => {
    console.log(`${new Date()} | The value of ${prop} is ${target[prop]}`);
    return Reflect.get(target, prop);
  },

  set: (target, prop, value) => {
    if (prop === "email") {
      if (!isValidEmail(value)) {
        console.log("Please provide a valid email");
        return false;
      }

      if (prop === "username") {
        if (value.length < 3) {
          throw new Error("Please use a larger name");
        } else if (!isAllLetters(value)) {
          throw new Error("You can use only letters");
        }
      }

      if (prop === "age") {
        if (typeof value !== "number") {
          throw new Error("Please provide a valid age");
        }

        if (value < 18) {
          throw "User cannot be younger than 18.";
        }
      }
    }

    return Reflect.set(target, prop, value);
  },
});

console.log(userProxy.firstName);
