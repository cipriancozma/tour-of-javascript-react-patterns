import observer from "./observer.js";
import "./analytics.js";

const button_1 = document.getElementById("button-1");
const button_2 = document.getElementById("button-2");

button_1.addEventListener("click", () => {
  const data = "Click on button 1";
  observer.notify(data);
});

button_2.addEventListener("click", () => {
  const data = "Click on button 2";
  observer.notify(data);
});
