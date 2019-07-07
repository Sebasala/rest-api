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

// get single item

app.get('/api/v1/items/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    let response = {
        success: 'false',
        message: 'item does not exist',
    };
    for (let i = 0; i < db.length; i++ ) {
        if (db[i].id === id) {
            response = {
                success: 'true',
                message: 'item retrieved successfully',
                item: db[i],
            }
        }
    };
    if (response.success) {
        return res.status(200).send(response);
    } else {
        return res.status(404).send(response);
    };
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});