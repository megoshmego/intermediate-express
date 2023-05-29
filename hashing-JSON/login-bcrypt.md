1. Logging in: The process of authenticating a user by verifying their credentials (such as username and password) and granting access to the system.

2. JSON Web Tokens (JWT): A compact and self-contained way of securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication purposes.

3. bcrypt: A password hashing function used to securely hash passwords. It adds a layer of security by applying salt and multiple rounds of hashing.

4. Username: A unique identifier chosen by a user to access a system. It is typically used in combination with a password for authentication.

5. Hashed Password: The result of applying a hash function to a password. Hashed passwords are stored in the database instead of the plain-text passwords for security reasons.

6. Compare: A function used to compare two values, such as comparing a plain-text password with a hashed password to check for a match.

7. Express Error: An error object specific to the Express framework, used to handle and communicate errors in middleware and route handlers.

Here are some quick guide examples and code snippets:

Example 1: Logging in a user
```javascript
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new ExpressError('Username and password required', 400);
    }

    const results = await db.query(
      'SELECT username, password FROM users WHERE username = $1',
      [username]
    );

    const user = results.rows[0];

    if (!user) {
      throw new ExpressError('Invalid username and password', 400);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return res.json({ message: 'Logged in' });
    } else {
      throw new ExpressError('Invalid username and password', 400);
    }
  } catch (err) {
    return next(err);
  }
});
```

Example 2: ExpressError class
```javascript
class ExpressError extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
```

These examples demonstrate the process of logging in a user by verifying their credentials and returning a response based on the authentication result. The ExpressError class is used to handle and communicate custom errors with appropriate status codes. Remember to replace `db.query` and `bcrypt.compare` with your actual database and bcrypt functions, respectively.