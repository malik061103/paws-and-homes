const express = require('express');
<<<<<<< HEAD
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
=======
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');

const { typeDefs, resolvers }= require('./schemas');
const db = require('./config/connection');

const port = process.env.PORT || 3000;
const app = express();


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();
// Middleware to parse JSON bodies
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474

// Define a route 
app.get('/', (req,res) => {
    res.send('Hello World!');
});

<<<<<<< HEAD
// Start the server
app.listen(port, () => {
    console.log('Server is running at http://localhost:3000');
});
=======

app.use('/graphql', expressMiddleware(server));
// Start the server
db.once('open', () => {
    app.listen(port, () => {
        console.log('Server is running at http://localhost:3000');
        console.log('Use GraphQL at http://localhost:${PORT}/graphql');
        });
    });
};

startApolloServer();



>>>>>>> c5867d95ea688cc8a668a4ab0dbc37eafe9c6474
