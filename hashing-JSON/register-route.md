1. JSON Web Token (JWT): A compact, URL-safe means of representing claims between two parties. It is used for authentication and authorization in web applications.

2. Node.js: An open-source, server-side JavaScript runtime environment that allows you to run JavaScript code outside the browser.

3. NPM: Node Package Manager, a package manager for the JavaScript programming language.

4. Express: A minimal and flexible web application framework for Node.js that provides a set of features for building web and mobile applications.

5. bcrypt: A library for hashing passwords and verifying password hashes.

6. Hashing: The process of transforming data (such as a password) into a fixed-size string of characters using a mathematical algorithm.

7. Async function: A function that returns a promise, allowing asynchronous operations to be performed inside it using the `await` keyword.

8. try-catch: A construct used for exception handling in JavaScript. Code inside the `try` block is executed, and if an exception occurs, it is caught and handled in the `catch` block.

9. Payload: The data contained in a JSON Web Token (JWT) that represents claims or attributes about the user.

10. Secret key: A unique string used in the process of signing and verifying JSON Web Tokens (JWTs). It is kept secret and should only be known by the server.

11. Sign: A method provided by the JSON Web Token (JWT) library that creates a new token by signing the payload with a secret key.

12. Verify: A method provided by the JSON Web Token (JWT) library that verifies the signature of a token using a secret key and returns the payload if the signature is valid.

Here's a quick guide example for using JSON Web Tokens (JWTs) in an Express app:

```javascript
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'your-secret-key';

// Route to generate a JWT
app.get('/generate-token', (req, res) => {
  const payload = { username: 'exampleUser' };
  const token = jwt.sign(payload, secretKey);
  res.json({ token });
});

// Route to verify a JWT
app.get('/verify-token', (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, secretKey);
    res.json({ valid: true, payload: decoded });
  } catch (error) {
    res.json({ valid: false });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In the above example, the `/generate-token` route generates a JWT by signing a payload with a secret key. The `/verify-token` route verifies the JWT received in the request's Authorization header and returns the payload if the signature is valid.

Please note that the example is simplified and may not cover all the necessary security considerations. It's important to implement proper security measures when using JSON Web Tokens in a production environment.