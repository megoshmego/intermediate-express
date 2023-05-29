Certainly! Here are some code snippets to help you understand the syntax for the subject:

1. Using Jest to write a test case:

```javascript
const { sum } = require('./myModule');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

2. Using Supertest to test an API endpoint:

```javascript
const request = require('supertest');
const app = require('./app');

test('GET /api/users should return a list of users', async () => {
  const response = await request(app).get('/api/users');

  expect(response.status).toBe(200);
  expect(response.body).toEqual(expect.arrayContaining([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ]));
});
```

3. Setting up a test database using Jest:

```javascript
const { setupTestDB } = require('./testUtils');

beforeAll(async () => {
  await setupTestDB();
});
```

4. Hashing a password using bcrypt:

```javascript
const bcrypt = require('bcrypt');
const password = 'myPassword';

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});
```

5. Generating a JSON Web Token (JWT) using the jsonwebtoken library:

```javascript
const jwt = require('jsonwebtoken');

const payload = { userId: 123 };
const secretKey = 'mySecretKey';

const token = jwt.sign(payload, secretKey);
console.log('JWT:', token);
```

6. Verifying and decoding a JWT using the jsonwebtoken library:

```javascript
const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywiaWF0IjoxNjMzMjMzMTY4LCJleHAiOjE2MzM4NDU1NjgsImlzcyI6ImF1dGhvcml6ZSIsInN1YiI6InVzZXJJZCJ9.-nuf2J5-nwSDdYPAo_aDebZ_xynF40aMfr8fIwvWl0w';

const secretKey = 'mySecretKey';

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Invalid token:', err);
  } else {
    console.log('Decoded payload:', decoded);
  }
});
```

Remember to install the required libraries (`jest`, `supertest`, `bcrypt`, `jsonwebtoken`) and set up the necessary dependencies based on your project structure and requirements. These code snippets provide a basic understanding of the syntax and usage for testing, authentication, and hashing related operations.