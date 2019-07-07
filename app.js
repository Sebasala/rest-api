import express from 'express';
import db from './db/db';

const app = express();

// get all items
app.get('/api/v1/items', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'items retrieved successfully',
    items: db
  })
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});