import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const resolvers = {
	Query: {
		user: (_, args) =>
			prisma.user.findUnique({ where: { id: parseInt(args.id) } }),
		posts: (_, args) =>
			prisma.post.findMany({ where: { authorId: parseInt(args.userId) } }),
	},
	Mutation: {
		createUser: (_, args) => prisma.user.create({ data: args }),
		createPost: (_, args) => prisma.post.create({ data: args }),
	},
	User: {
		posts: (parent) => prisma.post.findMany({ where: { authorId: parent.id } }),
	},
	Post: {
		author: (parent) =>
			prisma.user.findUnique({ where: { id: parent.authorId } }),
	},
};

export { resolvers };
