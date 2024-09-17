const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleWare } = require('@apollo/server/express4');

const { typeDefs, resolvers }= require('./schemas');
const db = require('./config/connection');

const port = process.env.PORT || 3000;
const path = require('path');
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

    app.use('/graphql', expressMiddleWare(server));

// Define a route 
app.get('/', (req,res) => {
    res.send('Hello World!');
});

// Start the server
db.once('open', () => {
    app.listen(port, () => {
        console.log('Server is running at http://localhost:3000');
        console.log('Use GraphQL at http://localhost:${PORT}/graphql);
        });
    });
};

startApolloServer();



