const { gql } = require("apollo-server");

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  """
  Remember, we don't have multiple specific endpoints
  to target different types like a REST API does.
  Instead, we define a special Query type.
  """
  type Query {
    "Get the tracks arrays for homepage grid"
    tracksForHome: [Track!]
  }
`;

module.exports = typeDefs;
