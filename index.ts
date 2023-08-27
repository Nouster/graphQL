import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./resolvers";

const prisma = new PrismaClient();

const server = new ApolloServer({
	typeDefs: `
    type User {
      id: ID!
      email: String!
      firstName: String
      lastName: String
      posts: [Post!]!
    }

    type Post {
      id: ID!
      title: String!
      content: String
      published: Boolean!
      author: User!
    }

    type Query {
      user(id: ID!): User!
      posts(userId: ID!): [Post!]!
    }

    type Mutation {
      createUser(email: String!, firstName: String, lastName: String): User!
      createPost(title: String!, content: String, published: Boolean!, authorId: Int!): Post!
  }
  `,
	resolvers,
	context: { prisma },
});

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
