# @logic-warlock/eslint-config-typescript

This package is all about TypeScript based rules for `.ts` and `.tsx` files. The base rules are in place to make it easier to write code with good functional components, and hopefully promote better React component habits in general.

# Installation

With Yarn:

```
yarn add -D @logic-warlock/eslint-config-typescript
```

With NPM:

```
npm install --save @logic-warlock/eslint-config-typescript
```

# Setup

All you need to do is extend `@logic-warlock/typescript` within your `.eslintrc` file, set `@typescript-eslint/parser` as the parser, and specify the location of a `.tsconfig` file within `parserOptions`.

Your eslint config should look something like the following:

```
{
  extends: ["@logic-warlock/typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  }
}
```

If you do not have a `tsconfig` file you can create one! Simply add `typescript` to your package.json file if it's not already there and run `tsc --init` in your terminal. This will create a default `tsconfig` file.

[Click Here](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more information on the `tsconfig` file.

# Rules

## Base

The default rules come from the recommended [TypeScript eslint](https://github.com/typescript-eslint/typescript-eslint) settings. Along with specifications for [tsdoc](https://github.com/Microsoft/tsdoc).

## Syntax

Currently the only syntax rule declared is so that return types for functions are required.
