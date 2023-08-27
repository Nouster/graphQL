"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var client_1 = require("@prisma/client");
var resolvers_1 = require("./resolvers");
var prisma = new client_1.PrismaClient();
var server = new apollo_server_1.ApolloServer({
    typeDefs: "\n    type User {\n      id: ID!\n      email: String!\n      firstName: String\n      lastName: String\n      posts: [Post!]!\n    }\n\n    type Post {\n      id: ID!\n      title: String!\n      content: String\n      published: Boolean!\n      author: User!\n    }\n\n    type Query {\n      user(id: ID!): User!\n      posts(userId: ID!): [Post!]!\n    }\n\n    type Mutation {\n      createUser(email: String!, firstName: String, lastName: String): User!\n      createPost(title: String!, content: String, published: Boolean!, authorId: ID!): Post!\n    }\n  ",
    resolvers: resolvers_1.resolvers,
    context: { prisma: prisma },
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("Server ready at ".concat(url));
});
