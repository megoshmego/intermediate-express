1. JWT (JSON Web Token): A compact and self-contained way of securely transmitting information between parties as a JSON object. It is commonly used for authentication and authorization purposes.

2. Bcrypt: A password hashing function used to securely hash passwords. It is a popular choice for password storage as it adds a layer of security by applying salt and multiple rounds of hashing.

3. Token: A string value that represents the authentication and authorization information of a user. In the context of JWT, it is a digitally signed token that contains a payload of information.

4. Payload: The data contained within a JWT. It typically includes information such as user details, permissions, and other relevant data.

5. Secret Key: A secret value used to sign and verify JWTs. It should be kept confidential and known only by the server to ensure the integrity and authenticity of the tokens.

6. Authentication: The process of verifying the identity of a user or entity. In this context, it refers to validating the user's credentials and generating a JWT as a proof of successful authentication.

7. Authorization: The process of granting or denying access to specific resources or actions based on the permissions associated with the user's JWT.

Here are some quick guide examples and code snippets:

Example 1: Generating a JWT Token
```javascript
const jwt = require('jsonwebtoken');

// Generate a token with a payload
const token = jwt.sign({ username: 'exampleUser' }, secretKey);

console.log(token);
```

Example 2: Verifying a JWT Token
```javascript
const jwt = require('jsonwebtoken');

try {
  // Verify the token using the secret key
  const decodedToken = jwt.verify(token, secretKey);
  
  console.log(decodedToken);
} catch (error) {
  console.log('Token verification failed:', error.message);
}
```

Example 3: Protecting a Route with JWT Authentication
```javascript
const jwt = require('jsonwebtoken');

app.get('/protectedRoute', (req, res, next) => {
  try {
    const token = req.body._token;
    if (!token) {
      throw new Error('Please log in first');
    }

    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, secretKey);

    // Access the user's information from the decoded token
    const username = decodedToken.username;

    // Process the protected route logic
    // ...

    res.json({ message: 'Access granted to protected route' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});
```

These examples illustrate the process of generating and verifying JWT tokens and protecting routes with JWT authentication. Remember to replace `secretKey` with your actual secret key value.