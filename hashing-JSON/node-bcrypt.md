1. Bcrypt: A password hashing function used to securely hash passwords. It is a well-known and established algorithm for password hashing.

2. Hashing: The process of converting a plain-text password into a fixed-length string of characters using a hash function. Hashing is a one-way process, meaning it is difficult to reverse-engineer the original password from the hash.

3. Work factor: The number of rounds of hashing applied to a password. A higher work factor increases the time required to compute the hash, making it more secure against brute-force attacks.

4. Hashed password: The result of applying a hash function to a password. The hashed password is stored in the database instead of the plain-text password for security reasons.

5. bcrypt.hash: A function that takes a password and a work factor as input and returns a promise that resolves to the hashed password.

6. bcrypt.compare: A function that takes a plain-text password and a hashed password as input and returns a promise that resolves to a boolean value indicating whether the passwords match.

Here are some quick guide examples and code snippets:

Example 1: Hashing a password
```javascript
const bcrypt = require('bcrypt');
const password = 'monkeybrainz123!';
const workFactor = 12;

bcrypt.hash(password, workFactor)
  .then((hashedPassword) => {
    console.log('Hashed password:', hashedPassword);
  })
  .catch((error) => {
    console.error('Error hashing password:', error);
  });
```

Example 2: Comparing passwords
```javascript
const bcrypt = require('bcrypt');
const hashedPassword = '$2b$12$q23lkljioevjg.joejvoeji'; // Example hashed password
const password = 'monkeybrainz123!';

bcrypt.compare(password, hashedPassword)
  .then((isMatch) => {
    console.log('Passwords match:', isMatch);
  })
  .catch((error) => {
    console.error('Error comparing passwords:', error);
  });
```

These examples demonstrate how to use the bcrypt package in Node.js to hash passwords and compare them with hashed passwords. The bcrypt.hash function takes a password and a work factor as input and returns a promise that resolves to the hashed password. The bcrypt.compare function takes a plain-text password and a hashed password as input and returns a promise that resolves to a boolean value indicating whether the passwords match.

Remember to handle errors appropriately when working with asynchronous functions, and replace the example hashed password with the actual hashed password stored in your database.