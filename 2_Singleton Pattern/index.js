import connection from "./DBConnection.js";
import singletonCounter from "./singletonCounter.js";

// console.log(singletonCounter.increment());

console.log(connection.connect());
