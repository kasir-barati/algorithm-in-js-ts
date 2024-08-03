# Module Pattern

- No access modifier in JS.
- We leverage [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) to have private members (encapsulation).
- Split up your code into smaller, reusable pieces with this design pattern.
- Dynamic import:
  - No hard-coded module paths.
  - Boosts our code's performance since it won't try to load everything at once. Useful ins scenarios like:
    1. Each image gets loaded when user clicks on "load image" button.
    2. the third-party moment module, which only gets imported when user needs to show the dates.
