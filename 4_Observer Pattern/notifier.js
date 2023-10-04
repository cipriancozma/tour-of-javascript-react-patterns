import observer from "./observer.js";

document.getElementById("my-button").addEventListener("click", () => {
  observer.notify("CLICKED");
});
