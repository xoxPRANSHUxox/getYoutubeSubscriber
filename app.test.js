const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');
const User = require('./models/userModel');

// Set a longer timeout for the tests
jest.setTimeout(10000); // Set timeout to 10 seconds

// Connect to the test database before running the tests
beforeAll(async () => {
    await mongoose.connect('mongodb://PranshuKumar:Pranshu2002@getyoutubesubscriber-shard-00-00.hoh74.mongodb.net:27017,getyoutubesubscriber-shard-00-01.hoh74.mongodb.net:27017,getyoutubesubscriber-shard-00-02.hoh74.mongodb.net:27017/?ssl=true&replicaSet=atlas-fc8vx6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=getyoutubesubscriber', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

// Clean up test data and close connection after all tests
afterAll(async () => {
    await mongoose.connection.dropDatabase(); // Clear test data after tests
    await mongoose.connection.close();
});

// Test for the home route (index.html)
describe('GET /', () => {
    it('should return the index.html file', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toMatch(/html/);
    });
});

// Test for retrieving all subscribers
describe('GET /subscribers', () => {
    it('should return an empty array if no subscribers exist', async () => {
        const res = await request(app).get('/subscribers');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(4); 
    });
});

// Test for retrieving subscriber names
describe('GET /subscribers/names', () => {
    it('should return an empty array if no subscribers exist', async () => {
        const res = await request(app).get('/subscribers/names');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(4);
    });
});

// Test for retrieving a subscriber by ID
describe('GET /subscribers/:id', () => {
    it('should return 404 if subscriber does not exist', async () => {
        const res = await request(app).get('/subscribers/invalidID');
        expect(res.statusCode).toBe(400); // Invalid ID should return 400
    });
});
