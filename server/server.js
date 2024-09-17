
const { ApolloServer } = require('@apollo/server');
const { expressMiddleWare } = require('@apollo/server/express4');

const { typeDefs, resolvers }= require('./schemas');
const db = require('./config/connection');


const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();


    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));
        
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
}

app.use('/graphql', expressMiddleWare(server));

db.once('open', () => {
    app.listen(PORT, () =>{
        console.log(`API server running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        });
    });
};

startApolloServer();