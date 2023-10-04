import observer from "./observer.js";

export function sendToGoogleAnalytics(data) {
  console.log("Sent to Google Analytics: ", data);
}

export function sendToCustomAnalytics(data) {
  console.log("Send to custom analytics: ", data);
}

export function sendToEmail(data) {
  console.log("Send to email: ", data);
}

observer.subscribe(sendToGoogleAnalytics);
observer.subscribe(sendToCustomAnalytics);
observer.subscribe(sendToEmail);
