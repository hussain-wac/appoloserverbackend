import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Sample data
const books = [
  { title: '1984', author: 'George Orwell' },
  { title: 'Brave New World', author: 'Aldous Huxley' },
];

// Define the GraphQL schema (typeDefs)
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// Define resolvers (functions to fetch the data)
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the Apollo Server
startStandaloneServer(server, {
  listen: { port: 5000 },  // The server will run on http://localhost:4000
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
