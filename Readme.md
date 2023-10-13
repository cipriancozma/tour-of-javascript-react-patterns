## A Tour of JavaScript & React Patterns

---

#### Design Patterns - JS

Design Patterns are concepts to solve commonly recurring problems in software architecture.

1. **Module Pattern**

---

Module Pattern splits up code into smaller, reusable pieces.

**Tradeoffs**

Encapsulation: The values within a module are scoped to that specific module. Values that aren't explicitly exported are not available outside of the module.

Reusability: We can reuse modules throughout our application

2. **Singleton Pattern**

---

With Singleton Pattern we restrict the instantiation of certain classes to one single instance.

**Tradeoffs**

Memory: Restricting the instantiation to just one instance could potentially save a lot of memory space. Instead of having to set up memory for a new instance each time, we only have to set up memory for that one instance.

3. **Proxy Pattern**

---

With Proxy Pattern we can intercept and control interactions to target objects.

The Proxy Pattern uses a Proxy intercept and control interactions to target objects.

Regularly we can access properties within an object with dot or bracket notation and modify them in a similar way.

With Proxy Pattern we don't interact with the objects directly. Instead, a Proxy object intercepts the request and forwards this to the target object.

**Reflect**

The built-in Reflect object make easier the manipulation of the target object.

Instead of accessing objects through obj[prop] we can access or modify through Reflect.get() and Reflect.set()

**Tradeoffs**

Control: Proxies make it easy to add functionality when interacting with a certain object, such as validation, logging, formatting, debugging.

Long handler executions: Executing handlers on every object interaction could lead to performance issues.

4. **Observer Pattern**

---

Use observables to notify subscribers when an event occurs.

With the observer pattern we have:

1. An observable object which can be observed by subscribers in order to notify them.

2. Subscribers which can subscribe to and get notified by the observable object.

**Tradeoffs**

Separation of concerns: The observer objects aren't tightly coupled to the observable object and can be decoupled at any time. The observable object is responsible for monitoring the events while the observers simply handle the received data.

Decreased performance: Notifying all subscribers might take a significant amount of time if the observer handling becomes too complex or if there are too many subscribers to notify.

5. **Factory Pattern**

---

The Factory Pattern is a function which is used to create many of the same objects.

A Factory function can be any function that returns an object.

**Tradeoffs**

DRY: The Factory pattern is useful when we have to create objects that share the same properties without having to repeat the same code over and over.

6. **Prototype Pattern**

---

Prototype Pattern share properties among many objects of the same type.

**Tradeoffs**

Memory efficient: The prototype chain allows us to access properties directly defined on the object itself, we can avoid duplication of methods and properties and reducing the amount of memory used.

7. **React -> Container/Presentation Pattern**

---

We can use the Container/Presentational pattern to separate the logic of a component from the view. To achieve this, we need to have:

- Presentational Component -> that takes care about how data is shown to the user

- Container Component -> that takes care about what data is shown to the user

**Tradeoffs**

Separation of concerns: Presentational components can be pure functions which are responsible for the UI, whereas the container components are responsible for the state and data of the app.

Reusability: We can easily reuse the presentational components throughout our application.

Flexibility: Since presentational components don't alter the app logic, the appearance of presentational components can easily be altered by someone without knowledge of the codebase.

Testing: Testing presentational components is easy, as they are usually pure functions. We know that the components will render based on which data we pass, without having to mock a data store.
