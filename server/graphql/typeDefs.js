const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    register(
      email: String!
      username: String!
      password: String!
      passconf: String!
    ): User
  }
`;

module.exports = typeDefs;
