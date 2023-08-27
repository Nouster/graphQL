"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var resolvers = {
    Query: {
        user: function (_, args) {
            return prisma.user.findUnique({ where: { id: parseInt(args.id) } });
        },
        posts: function (_, args) {
            return prisma.post.findMany({ where: { authorId: parseInt(args.userId) } });
        },
    },
    Mutation: {
        createUser: function (_, args) { return prisma.user.create({ data: args }); },
        createPost: function (_, args) { return prisma.post.create({ data: args }); },
    },
    User: {
        posts: function (parent) { return prisma.post.findMany({ where: { authorId: parent.id } }); },
    },
    Post: {
        author: function (parent) {
            return prisma.user.findUnique({ where: { id: parent.authorId } });
        },
    },
};
exports.resolvers = resolvers;
