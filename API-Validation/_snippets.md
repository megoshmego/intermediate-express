Certainly! Here are some simple code snippets that demonstrate the usage of JSON Schema validation in different programming languages:

1. JavaScript (using AJV library):

```javascript
const Ajv = require('ajv');
const ajv = new Ajv(); // Create an instance of AJV

const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number', minimum: 18 },
    email: { type: 'string', format: 'email' },
  },
  required: ['name', 'email'], // Fields that are required
};

const validate = ajv.compile(schema); // Compile the schema

const data = {
  name: 'John Doe',
  age: 20,
  email: 'johndoe@example.com',
};

const isValid = validate(data); // Validate the data

if (isValid) {
  console.log('Data is valid');
} else {
  console.log('Data is invalid');
  console.log(validate.errors); // Display validation errors
}
```

2. Python (using jsonschema library):

```python
from jsonschema import validate

schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "age": {"type": "integer", "minimum": 18},
        "email": {"type": "string", "format": "email"}
    },
    "required": ["name", "email"]
}

data = {
    "name": "John Doe",
    "age": 20,
    "email": "johndoe@example.com"
}

try:
    validate(data, schema)  # Validate the data against the schema
    print("Data is valid")
except Exception as e:
    print("Data is invalid")
    print(e)  # Display validation errors
```

3. Ruby (using json-schema gem):

```ruby
require 'json-schema'

schema = {
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "age": {"type": "integer", "minimum": 18},
    "email": {"type": "string", "format": "email"}
  },
  "required": ["name", "email"]
}

data = {
  "name": "John Doe",
  "age": 20,
  "email": "johndoe@example.com"
}

if JSON::Validator.validate(schema, data)  # Validate the data against the schema
  puts "Data is valid"
else
  puts "Data is invalid"
  puts JSON::Validator.fully_validate(schema, data)  # Display validation errors
end
```

These code snippets demonstrate how to define a JSON schema, validate data against it, and handle validation errors in JavaScript, Python, and Ruby. You can run these snippets in their respective environments to see the output and understand the syntax for JSON Schema validation.