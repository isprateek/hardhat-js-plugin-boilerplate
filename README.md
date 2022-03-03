# Hardhat Javascript plugin boilerplate

This is a sample Hardhat plugin written in Javascript. Creating a Hardhat plugin
can be as easy as extracting a part of your config into a different file and
publishing it to npm.

This sample project contains an example on how to do that, but also comes with
many more features:

- A mocha test suite ready to use
- A package.json with scripts and publishing info
- Examples on how to do different things

## Installation

To start working on your project, just run

```bash
npm install
```
or
```bash
npm i
```

## Plugin development

Make sure to read our [Plugin Development Guide](https://hardhat.org/advanced/building-plugins.html) to learn how to build a plugin.

## Testing

Running `npm run test` will run every test located in the `test/` folder. They
use [mocha](https://mochajs.org) and [chai](https://www.chaijs.com/),
but you can customize them.

We recommend creating unit tests for your own modules, and integration tests for
the interaction of the plugin with Hardhat and its dependencies.

## Linting and autoformat

All of Hardhat projects use [prettier](https://prettier.io/) and
[tslint](https://palantir.github.io/tslint/).

You can fix your code style by running `npm run lint`

## Building the project

Just run `npm run build` ️👷

## README file

This README describes this boilerplate project, but won't be very useful to your
plugin users.

Take a look at `README-TEMPLATE.md` for an example of what a Hardhat plugin's
README should look like.
