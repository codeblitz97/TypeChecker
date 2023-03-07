# 🔍 TypeChecker

An advanced Type Checker that checks and handles type for the param name on your function built to make nodejs module creating easy. Both TypeScript and JavaScript.

## 🚀 Features

- Easy to code
- Zero dependencies
- Light weight module
- Make type-checking easy
- Error handler

## 💻 Installation

NPM:

```sh
npm install @mohtasimalam/type-checker@latest
```

Yarn:

```sh
yarn add @mohtasimalam/type-checker@latest
```

## 📝 How to use

Using **Type Checker** is very easy
Only 1-2 lines code

Example usage (TypeScript):

```ts
import { JsTypes, typeCheck } from "@mohtasimalam/type-checker";

const aFunction = (msg: string, ...optional: any[]) => {
  typeCheck({ paramName: msg, expectedType: JsTypes.String });
  let output = msg;

  if (optional.length > 0) {
    output += optional.join(" ");
  }

  return output;
};

export { aFunction };
```

If the user provided parameter type is not same as the function's required type it will throw a \`**TypeError**\`

Example Usage (JavaScript):

```js
const { JsTypes, typeCheckJs } = require("@mohtasimalam/type-checker");

const aFunction = (msg, ...optional) => {
  typeCheckJs({
    paramName: msg,
    paramType: JsTypes.String,
    expectedType: JsTypes.String,
  });
  let output = msg;

  if (optional.length > 0) {
    output += optional.join(" ");
  }

  return output;
};

export { aFunction };
```

Not 1-2 line(s) of code?

The code given in the example is full code.

**The exact type-checking code is:**

```ts
typeCheck({ paramName: msg, expectedType: JsTypes.String });
```

And

```js
typeCheckJs({
  paramName: msg,
  paramType: JsTypes.String,
  expectedType: JsTypes.String,
});
```

It is same for both TypeScript and JavaScript
