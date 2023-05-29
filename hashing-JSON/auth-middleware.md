1. Middleware: Middleware functions are functions that have access to the request and response objects and the next middleware function in the application's request-response cycle. They can perform tasks like modifying the request or response objects, terminating the request-response cycle, or calling the next middleware function.

2. JWT (JSON Web Token): JSON Web Token is an open standard for securely transmitting information between parties as a JSON object. It is commonly used for authentication and authorization purposes. JWTs consist of three parts: a header, a payload, and a signature.

3. Token Verification: Token verification is the process of validating the authenticity and integrity of a JWT. It involves verifying the signature of the token using a secret key or public key to ensure that the token has not been tampered with or forged.

4. Request.user: `request.user` is a property that stores the authenticated user information extracted from the JWT. It is commonly used to identify and authorize the user within the application.

5. Middleware Usage: `app.use` is an Express.js method used to register middleware functions. Middleware functions added using `app.use` are executed for every incoming request, allowing them to perform actions such as authentication, logging, or modifying request data.

6. Error Handling: Error handling refers to the process of handling and responding to errors that occur during the execution of an application. In the script, the error handling mechanism involves catching errors thrown during token verification and responding with an appropriate error message or passing control to the next middleware function.

7. Authorization: Authorization is the process of determining whether a user has the necessary permissions to perform a specific action or access certain resources within an application. In the script, authorization is achieved using middleware functions like `ensureLoggedIn` and `ensureAdmin` to check if the user has the required authentication and authorization to access certain routes.

Here are a few quick guide examples and code snippets related to the script:

Example 1: Middleware Usage
```javascript
// Example of using a middleware function
app.use(authenticateJWT);
```

Example 2: Error Handling Middleware
```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});
```

Example 3: Ensure Logged In Middleware
```javascript
// Middleware to ensure user is logged in
const ensureLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
```

Example 4: Ensure Admin Middleware
```javascript
// Middleware to ensure user is an admin
const ensureAdmin = (req, res, next) => {
  if (req.user && req.user.type === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
};
```

These examples and snippets provide a starting point for understanding and implementing authentication and authorization using JWTs in an Express.js application.