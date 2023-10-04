import observer from "./observer.js";

function logger(data) {
  console.log(`${Date.now()} ${data}`);
}

observer.subscribe(logger);
