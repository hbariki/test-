// index.test.js
import request from 'supertest';
import app from '../app'; 


describe('GET /api/endpoint', () => {
  test('responds with JSON', async () => {
    const response = await request(app).get('/api/tree');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'GET request successful');
  });
});

describe('POST /api/tree', () => {
    // Assuming the label 'cat' already exists in the tree
    const existingLabel = 'cat';
  
    test('fails to add node with existing label in the tree', async () => {
      const response = await request(app)
        .post('/api/tree')
        .send({ parent: 3, label: existingLabel }); // Assuming 'cat' label already exists in the tree
  
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error', 'Label already exists in the tree');
    });
  
    test('adds a new node to the tree if label is unique', async () => {
        // Update uniqueLabel value while running the test
      const uniqueLabel = 'fox';
  
      const response = await request(app)
        .post('/api/tree')
        .send({ parent: 3, label: uniqueLabel});
  
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Node added successfully');
      expect(response.body).toHaveProperty('newNode');
      expect(response.body.newNode).toHaveProperty('label', uniqueLabel);
    });
  
  });


