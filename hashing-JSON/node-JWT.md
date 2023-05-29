1. JSON Web Token (JWT): A compact and self-contained means of transmitting information between parties as a JSON object. It is commonly used for authentication and authorization in web applications.

2. JWT.sign: A method used to create a new JWT by signing a payload with a secret key. It takes a payload object, a secret key, and optional options as input and returns a JWT.

3. Payload: The data contained within a JWT. It typically includes information about the user or session.

4. Secret key: A secret string used to sign and verify JWTs. It should be kept secure and only known to the server.

5. JWT.verify: A method used to verify the signature of a JWT and retrieve the payload. It takes a JWT and a secret key as input and returns the payload if the signature is valid.

6. JWT.decode: A method used to decode the contents of a JWT without verifying the signature. It returns the payload of the JWT.

Here are some quick guide examples and code snippets:

Example 1: Creating a JWT
```javascript
const jwt = require('jsonwebtoken');
const payload = { username: 'Todddd' };
const secretKey = 'mysecretkey';

const token = jwt.sign(payload, secretKey);
console.log('JWT:', token);
```

Example 2: Verifying a JWT
```javascript
const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRvZGRkZCJ9.WkctUMtWZZTycVDFQdTs9-CYRHlNF7xJtv4tHHySMDY';
const secretKey = 'mysecretkey';

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Invalid token:', err.message);
  } else {
    console.log('Decoded payload:', decoded);
  }
});
```

Example 3: Decoding a JWT (without verification)
```javascript
const jwt = require('jsonwebtoken');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRvZGRkZCJ9.WkctUMtWZZTycVDFQdTs9-CYRHlNF7xJtv4tHHySMDY';

const decoded = jwt.decode(token);
console.log('Decoded payload:', decoded);
```

These examples demonstrate how to use the jsonwebtoken package in Node.js to create and verify JWTs. The jwt.sign function is used to create a JWT by signing a payload with a secret key. The jwt.verify function is used to verify the signature of a JWT and retrieve the payload. The jwt.decode function is used to decode the contents of a JWT without verifying the signature.

Remember to use a strong and secure secret key and handle errors appropriately when working with JWTs.