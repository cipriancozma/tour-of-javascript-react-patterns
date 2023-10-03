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
