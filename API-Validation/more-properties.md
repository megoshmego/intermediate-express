Terms and Definitions for Flashcards:
1. JSON Schema: A specification that defines the structure, data types, and validation rules for JSON data.
2. Validation: The process of checking whether data conforms to specified rules and constraints.
3. Numeric types: Data types in JSON Schema that include integers and numbers with additional constraints such as minimum, maximum, and multiples.
4. Range: A specified interval of values defined by minimum and maximum constraints.
5. String: A data type in JSON Schema that represents textual data.
6. Length: A constraint that specifies the minimum and/or maximum length of a string.
7. Regular Expressions (Regex): A powerful tool for matching and manipulating strings based on patterns.
8. Format: A predefined validation rule in JSON Schema for common data formats like email addresses, URLs, and IP addresses.
9. Customization: The ability to define and customize error messages and feedback in JSON Schema validation.
10. AJV (Another JSON Schema Validator): A popular JSON Schema validator for Node.js known for its speed and compatibility with the AJV errors package for custom error handling.

Example code snippets:

1. Using a range constraint for the "year" property:
```json
{
  "type": "integer",
  "minimum": 0,
  "maximum": 2020
}
```

2. Applying a format constraint for the "email" property:
```json
{
  "type": "string",
  "format": "email"
}
```

3. Adding a regular expression pattern constraint for the "phone" property:
```json
{
  "type": "string",
  "pattern": "^\\d{3}-\\d{3}-\\d{4}$"
}
```

4. Multiple validation rules for complex data structure using objects:
```json
{
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": { "type": "integer", "minimum": 0 },
    "email": { "type": "string", "format": "email" }
  },
  "required": ["name", "age"]
}
```

These examples demonstrate the usage of various validation rules, including range constraints, format constraints, regular expression patterns, and object structures, in JSON Schema.