# graphQL
This code represents the setup of a GraphQL server using Apollo Server and Prisma.

It defines a GraphQL schema with types for users and posts, along with queries and mutations to interact with these types. Resolvers are provided for each field, and the Prisma client is used to perform database operations. The server is listening on a specific URL, ready to receive GraphQL queries.

## Prerequisites

- Node.js (v14 or higher)
- MySQL (make sure you have a MySQL server running or set one up)

## Installation

1. Clone this repository to your machine:

```bash
git clone https://github.com/your-user/your-project.git
cd your-project
```

2. Install the dependencies by running the following command:

npm install

3. Configuration
   
Create a .env file and configure your MySQL database:
DATABASE_URL=mysql://<username>:<password>@<host>:<port>/<database>

4. Database Migration

To initialize the database, run the following commands:

npx prisma migrate dev --name firstMigration

5. Starting the Server

run node index.ts
