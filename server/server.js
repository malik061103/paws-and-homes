const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { typeDefs, resolvers }= require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3000;
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

// Define a route 


app.use('/graphql', expressMiddleware(server));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }
// Start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:3000`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};

startApolloServer();



