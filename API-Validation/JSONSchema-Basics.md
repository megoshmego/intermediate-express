Terms and Definitions for Flashcards:
1. JSON Schema: A standard specification for describing the structure and constraints of JSON data.
2. Validation: The process of checking if JSON data conforms to a specified JSON schema.
3. Vocabulary: A set of keywords and constructs defined by JSON Schema for describing JSON documents.
4. Implementation: The actual code or library that interprets and uses JSON Schema to validate JSON data.
5. Metadata: Additional information about a JSON schema, such as title, description, and examples.
6. Type: A property in JSON Schema that specifies the data type expected for a particular field.
7. Object: A data type in JSON Schema representing a collection of key-value pairs.
8. Required: A property in JSON Schema that specifies that a particular field must be present in the JSON data.
9. Minimum and Maximum: Properties in JSON Schema that define the allowed range for numeric values.
10. Reference: The ability to refer to and reuse other JSON schemas within a schema.

Example code snippets:

1. Simple JSON Schema for Address Validation:
```json
{
  "type": "object",
  "properties": {
    "street address": { "type": "string" },
    "city": { "type": "string" },
    "state": { "type": "string" }
  },
  "required": ["street address", "city", "state"]
}
```

2. Using JSON Schema for Validation:
```javascript
const Ajv = require('ajv');
const ajv = new Ajv();

const schema = {
  // JSON Schema definition
};

const validate = ajv.compile(schema);
const isValid = validate(data); // data is the JSON data to be validated

if (isValid) {
  console.log('Data is valid');
} else {
  console.log('Data is invalid');
  console.log(ajv.errors); // Error details
}
```

3. JSON Schema with References:
```json
{
  "type": "object",
  "properties": {
    "familyName": { "type": "string" },
    "givenName": { "type": "string" },
    "address": { "$ref": "geographical-coordinate.json" }
  },
  "required": ["familyName", "givenName", "address"]
}
```

These examples illustrate the concept of JSON Schema, its usage for data validation, and the ability to reference other schemas.