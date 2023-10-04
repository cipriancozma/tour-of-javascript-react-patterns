const observers = [];

export default Object.freeze({
  notify: (data) => observers.forEach((observer) => observer(data)),
  subscribe: (func) => observers.push(func),
  unsubscribe: (func) => {
    [...observers].forEach((observer, idx) => {
      if (observer === func) {
        observer.splice(idx, 1);
      }
    });
  },
});
