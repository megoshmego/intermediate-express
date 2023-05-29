Here are the terms and definitions extracted from the script:

1. Mocking: Creating a simulated or fake version of a dependency or behavior during testing to isolate specific functionality and eliminate unpredictability or external dependencies.
2. Unit testing: Testing individual units or components of code to ensure their functionality in isolation.
3. External tools/libraries: Third-party tools or libraries used in an application that may introduce dependencies or randomness.
4. Jest: A popular JavaScript testing framework commonly used for unit testing, providing built-in mocking capabilities.
5. Mock function: A function created using Jest's `jest.fn()` that can be controlled and monitored during testing.
6. Mock object: An object returned by `jest.fn()` that provides additional properties and methods to track calls, arguments, and other interactions with the mocked function.
7. `mock.calls`: A property of the mock object that contains an array of all the calls made to the mocked function, including the arguments passed in each call.
8. `expect().toHaveBeenCalled()`: A Jest matcher used to verify whether a mocked function has been called at least once.
9. `expect().toHaveBeenCalledTimes()`: A Jest matcher used to verify the exact number of times a mocked function has been called.
10. `jest.mock()`: A Jest function used to mock dependencies, such as external APIs or libraries, and define their behavior during testing.

And here are some quick guide examples and code snippets:

1. Mocking a random function with Jest:

```javascript
// Original function
function getRandomNumber() {
  return Math.random();
}

// Mocking the random function
Math.random = jest.fn(() => 0.5);

// Testing the logic using the mocked random function
expect(getRandomNumber()).toBe(0.5);
expect(Math.random).toHaveBeenCalledTimes(1);
```

2. Mocking an external API request with Jest:

```javascript
// Original function that makes an API request
async function fetchData() {
  const response = await axios.get('https://api.example.com/data');
  return response.data;
}

// Mocking the API request
axios.get = jest.fn().mockResolvedValue({ data: 'Mocked data' });

// Testing the logic using the mocked API request
await expect(fetchData()).resolves.toEqual('Mocked data');
expect(axios.get).toHaveBeenCalledWith('https://api.example.com/data');
expect(axios.get).toHaveBeenCalledTimes(1);
```

3. Mocking a file system interaction with Jest:

```javascript
// Original function that reads a file
const fs = require('fs');

function readFile() {
  return fs.readFileSync('data.txt', 'utf8');
}

// Mocking the file system interaction
jest.mock('fs', () => ({
  readFileSync: jest.fn(() => 'Mocked file content'),
}));

// Testing the logic using the mocked file read
expect(readFile()).toBe('Mocked file content');
expect(fs.readFileSync).toHaveBeenCalledWith('data.txt', 'utf8');
expect(fs.readFileSync).toHaveBeenCalledTimes(1);
```

These examples demonstrate how to mock different dependencies or behaviors using Jest's mocking capabilities. You can adapt these examples to your specific testing scenarios and use cases, whether it's mocking network requests, file system interactions, or other external dependencies. The Jest documentation provides further details and examples on mocking and other testing features.