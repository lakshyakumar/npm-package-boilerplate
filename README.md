# npm-package-boilerplete

A boilerplate for creating npm packages integrated with typescript and jest.

## Testing

To run tests for this package, follow these steps:

1. Install the necessary dependencies (if you haven't already):

```bash
npm install
```

2. Run the tests:

```bash
npm test
```

This will execute the test scripts defined in your `package.json` file.

## Publishing to npm

Before publishing, make sure you have an npm account and you are logged in to npm in your terminal. If you don't have an account, you can create one at [npmjs.com/signup](https://www.npmjs.com/signup).

1. Log in to npm from your terminal:

```bash
npm login
```

2. Navigate to your package directory and run:

```bash
npm publish
```

If your package is private, you can publish it as a scoped package under your username:

```bash
npm publish --access=public
```

This will publish your package to npm, making it available for anyone to install.

## Contributing

Contributions are always welcome! Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
