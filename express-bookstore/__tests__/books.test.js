const request = require('supertest');
const app = require('../app'); // Import your Express app
const Book = require('../models/book');
const db = require('../models/db');


// Sample book data
const testBook = {
  isbn: "1234567890",
  amazon_url: "http://amazon.com/somebook",
  author: "Test Author",
  language: "english",
  pages: 100,
  publisher: "Test Publisher",
  title: "Test Book",
  year: 2023
};

// Start tests
describe('Book Routes', () => {
  
  // Testing GET route
  it('should show all books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('books');
  });

  // Testing POST route
  it('should create a new book', async () => {
    const res = await request(app).post('/books').send(testBook);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('book');
    expect(res.body.book).toEqual(testBook);
  });

  // Testing PUT route
  it('should update an existing book', async () => {
    const updatedBook = {...testBook, title: 'Updated Book'};
    const res = await request(app).put(`/books/${testBook.isbn}`).send(updatedBook);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('book');
    expect(res.body.book.title).toEqual(updatedBook.title);
  });

  // Testing DELETE route
  it('should delete a book', async () => {
    const res = await request(app).delete(`/books/${testBook.isbn}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Book deleted');
  });

  // Assuming db is your database connection instance
afterAll(async () => {
    await db.$pool.end();  // this should close your database connection
  });
  
});

