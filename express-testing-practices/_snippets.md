Certainly! Here are some code snippets related to the terms provided:

1. Continuous Integration (CI):

```python
# Example script for continuous integration
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

# Test cases
def test_add():
    assert add(2, 2) == 4

def test_multiply():
    assert multiply(3, 4) == 12

# Run the tests
test_add()
test_multiply()
```

2. JSON Schema:

```python
import jsonschema

# Example JSON data
data = {
    "name": "John Doe",
    "age": 25,
    "email": "john@example.com"
}

# JSON Schema definition
schema = {
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "age": {"type": "integer"},
        "email": {"type": "string", "format": "email"}
    },
    "required": ["name", "email"]
}

# Validate JSON data against the schema
try:
    jsonschema.validate(data, schema)
    print("Validation successful!")
except jsonschema.ValidationError as e:
    print("Validation failed:", e)
```

3. Unit Testing with Jest (JavaScript):

```javascript
// Example test using Jest

// Code to be tested
function add(a, b) {
    return a + b;
}

// Test case
test('adds two numbers correctly', () => {
    expect(add(2, 2)).toBe(4);
});
```

4. Mocking with Jest (JavaScript):

```javascript
// Example test using Jest mocking

// Code to be tested
class Calculator {
    add(a, b) {
        return a + b;
    }
}

// Test case with mocking
test('adds two numbers correctly', () => {
    const calculator = new Calculator();
    const mockAdd = jest.spyOn(calculator, 'add');
    
    // Mock the add method
    mockAdd.mockReturnValue(5);
    
    // Test the functionality
    expect(calculator.add(2, 3)).toBe(5);
    
    // Verify the method was called
    expect(mockAdd).toHaveBeenCalled();
    
    // Clean up the mock
    mockAdd.mockRestore();
});
```

These code snippets provide a basic understanding of syntax and usage related to continuous integration, JSON Schema validation, unit testing with Jest, and mocking. Remember to adapt the code to your specific programming language and testing framework if necessary.