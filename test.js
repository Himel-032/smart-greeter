// test.js
const { getGreeting } = require("./index");

// Default
console.log(getGreeting());

// With name
console.log(getGreeting("Himel"));

// With name and emoji
console.log(getGreeting("Himel", { emoji: true }));

// With language and emoji
console.log(getGreeting("Himel", { lang: "bn", emoji: true }));

// Another language
console.log(getGreeting("Alice", { lang: "fr" }));
console.log(getGreeting({  emoji: true }));
