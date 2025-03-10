import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Sample data
const books = [];

const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String!, author: String!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    createBook: (_, { title, author }) => {
      const newBook = { title, author };
      books.push(newBook);
      return newBook;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 5000 } }).then(({ url }) => {
  console.log(`Server running at ${url}`);
});