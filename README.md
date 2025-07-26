# smart-greeter

A simple and customizable Node.js module that returns a time-based greeting in multiple languages — with optional emoji and name support.

## 🛠 Features

- Returns greeting based on the current time (`morning`, `afternoon`, `evening`, `night`)
- Supports multiple languages
- Optional emoji 👋
- Optional name in the greeting

---

## 📦 Installation

```bash
npm install smart-greeter

```

## 🚀 Usage
```js
const { getGreeting } = require('smart-greeter');

// Example 1: Simple greeting
console.log(getGreeting()); 
// Output: "Good morning!"

// Example 2: Greeting with name
console.log(getGreeting('Himel')); 
// Output: "Good morning, Himel!"

// Example 3: With emoji and name
console.log(getGreeting('Himel', { emoji: true }));
// Output: "Good morning, Himel! 👋"

// Example 4: In Spanish
console.log(getGreeting({ lang: 'es' }));
// Output: "Buenos días!"

// Example 5: Spanish + Name + Emoji
console.log(getGreeting('Carlos', { lang: 'es', emoji: true }));
// Output: "Buenos días, Carlos! 👋"

```



📄 License
```LICENSE
MIT License © 2025 Md Himel
```


