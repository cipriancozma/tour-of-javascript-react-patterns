import * as books from "./books.js";

// console.log(books);

const factoryBooks = (title, author, isbn) => ({
  id: (Math.random() * 10).toFixed(1),
  title,
  author,
  isbn,
});

const factoryBook1 = factoryBooks("Harry Potter", "JK Rowling", "AB123");
const factoryBook2 = factoryBooks(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "CD456"
);

console.log(factoryBook1);
console.log(factoryBook2);
