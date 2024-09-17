const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

// Define a route 
app.get('/', (req,res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log('Server is running at http://localhost:3000');
});