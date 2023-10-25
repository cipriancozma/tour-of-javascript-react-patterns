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

8. **React -> High Order Component Pattern**

---

Pass reusable logic down as props to components throughout the app.

HOC make it easy to pass logic to components by wrapping them.

**Tradeoffs**

Separations of concerns: Using HOC pattern allows us keep logic that we want to reuse all in one place.

Naming collisions: It can easily happen that the HOC overrides a prop of a component. Make sure that the HOC can handle accidental name collision, by either renaming the prop or merging it.

9. **React -> Render Props Pattern**

---

Render Props pattern is about passing JSX elements to components through props

With the Render Props patern, we pass components as props to other components. The components that are passed as props can in turn receive props from that component.

Render props make it easy to reuse logic across multiple components.

**Tradeoffs**

Reusability: Since render props can be different each time, we can make components that receive render props highly reusable for multiple usecases.

Separation of concerns: We can separate our app's logic from rendering components through render props. The stateful component that receives a render prop can pass the data onto stateless components which merely render the data.

Solution to HOC problems: Since we explicitly pass props, we solve the HOC's implicit props issue.

Unnecessary with Hooks: Hooks changed the way we can add reusability and data sharing to components, which can replace the render props pattern in many cases.

10. **React -> Hooks Pattern**

---

Use functions to reuse stateful logic among multiple components.

**Tradeoffs**

Simplifies components: Hooks make it easy to add state to functional components, rather than class components.

Reusing stateful logic: Hooks allow you to reuse stateful logic among multiple components accross the app.

Sharing non-visual logic: Hooks make it easy to share non visual logic, without having to use patterns like HOC or Render Props

Good alternative to older React design patterns: The hooks pattern is a good alternative to use to an older one, namely Presentational / Container pattern.

11. **React -> Provider Pattern**

---

The Provider Pattern uses React's Context API which is a way to easily share data between components.

**Tradeoffs**

Scalability: There is less risk involved when sharing state across multiple components with the Provider Pattern.

Performance: Components that consume the Provider context re-render whenever a value changes. This can cause performance issues if you aren't careful which components are consuming the context.

12. **React -> Compound Pattern**

---

Compound Pattern is used to create multiple components that work together to perform a single task.

**Tradeoffs**

State management: Compound components manage their own internal state, which they share among the several child components

Single import: When importing a compound component, we don't have to explicitly import the child components that are available on that component.

#### Performance Patterns

13. **Bundling & Compiling**

---

Performance Patterns can be used to achieve a better user and developer experience.

##### Bundlers

A bundler bundles the application together in one or multiple files and makes it possible to make code executable in other environments. A bundler receives an entry file from which it starts to bundle the code together.

Popular bundlers: Webpack, Parcel, Rollup

##### Compilers

A compiler converts JavaScript or TypeScript code into another version of JavaScript, which could be backwards compatible in current and older browsers or environments.

For example, we can use Private class features in JS, but not all browsers support it yet. If we use Private class features in our code, we need to use a compiler to compile it to a version of JS that a browser can execute.

Popular compilers: Babel, TypeScript

##### Minifiers

A minifier can reduce the size of a JS file based on a certain configuration, for example by removing comments, making variable and function names smaller, removing whitespace and so on.
This allows to have a much smaller bundle size and faster execution without sacrificing readability, while JS executes and behaves the same way.

Popular minifiers: Terser, Uglify

##### Combination

When working with bundlers, for example Webpack, we have to configure Webpack to include a compiler like Babel and add optimizations like the Terser minifier.

There are also tools that combine all these steps, such as: SWC or ESBuild -> both compiler, bundler and minifier.

##### Bundle Splitting

Bundle splitting is the process of creating multiple, smaller bundles rather than one large bundle.

A larger bundle can lead to an increased amount of loading time, processing time and execution time. Users on low end devices or slower networks will see an significant increase in loading time before the bundle has been fetched.

To avoid larger bundles we can tell the bundler to create multiple, smaller bundles instead of bundling everything into one big file.

##### Three Shaking

With Three Shaking we can reduce the size by eliminatig the dead code. Three Shaking is aimed at removing unused code from JS bundle.

For example, if two methods are exported from a file, namely validateInput and formatInput, but we are importing only validateInput, the bundler will ensure that the formatInput method won't be included in the final bundle.

14. **Static Import**

---

Import code that has been exported by another module.

A statically imported module is a module that's imported with the default import keyword.

**Tradeoffs**

Loading instant dependencies: Statically imported components are instantly available to the user.

Optimizations: Statically imported modules can be statically analyzed and tree-shaken.

Large bundle size: When importing all modules, you might include code that won't be necessary.

15. **Dynamic Import**

---

Imports part of your code on demand.

In React, we can dynamically load a component by using React.Suspense with React.lazy.

**Tradeoffs**

Faster initial load: Dynamically importing modules reduces the initial bundle size - allowing for a smaller initial load since the client doens't have to download and execute as much, saving bandwith.

User Experience: If you're lazy loading a component that's needed for the initial render, it may unnecessary result in longer loading times. Try to only lazy load components that aren't visible on the initial render.

16. **Import on Visibility**

---

Load non critical components when they are visible in the viewport.

We can also dynamically import components based on their visibility within the viewport.

One way to dynamically import components on interaction is by using the Intersection Observer API. There is a React hook called react-intersection-observer that we can use to easily detect whether a component is visible in the viewport.

17. **Route Based Splitting**

---

Dynamically load components based on the current route.

If your application has multiple pages, we can use dynamic imports to only load the resources that are needed for the current route.

Instead of the code for all the possible pages in the initial bundle, we can bundle split based on routes.

If you're using react-router for navigation, you can wrap the Switch component in a React.Suspense and import the routes using React.lazy. This automatically enables route-based code splitting.

18. **Browser Hints**

---

Use hints to inform the browser about critical resources.

**Prefetch** is used to fetch and cache the resources that may be requested some time soon.

We can prefetch a resource by explicitly adding it to the head of the html document.

`<link rel="prefetch" href="./about.bundle.js" />`

If you're using Webpack, you can prefer to prefetch id dynamically by using /_ webpackPrefetch: true _/

`const About = lazy(() => import(/* webpackPrefetch: true */ "./about"));`

**Tradeoffs**

Loading time: The browser can quickly load and render the component from cache, instead of having to make a request to the server.

Unnecessary: If the user never ended up in navigating to that route, we unnecessary loaded the resource, which could affect the app's performance.

**Preload** is used the inform the browser of critical resources before they are discovered.

The preload browser hint can be used to fetch resources that are critical to the current navigation, such as fonts and images.

We can preload a resource by adding it to the head of the html.

`<link rel="preload" href="./search-flyout.bundle.js" />`

If you're using Webpack you can preload it using /_ webpackPreload: true _/.

`const SearchFlyout = lazy(() =>
  import(/* webpackPreload: true */ "./SearchFlyout")
);`

**Tradeoffs**

Loading Time: The browser can quickly load and render the component from cache, instead of having to make a request to the server.

Layout Shift: Preloading styles, fonts and images can reduce layout shift.

#### Rendering Patterns
