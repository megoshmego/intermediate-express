/** Server for bookstore. */
const { Validator } = require('express-json-validator-middleware');
const validator = new Validator({allErrors: true});
const validate = validator.validate;

// Load schema
const bookSchema = require('./bookSchema.json');


const app = require("./app");

app.listen(3000, () => {
  console.log(`Server starting on port 3000`);
});
