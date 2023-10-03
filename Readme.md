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
