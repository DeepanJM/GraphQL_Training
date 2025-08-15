export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    games: [Game]
    game(id: ID!): Game #Fetch a single game by ID/variable for searching by ID
    reviews: [Review]
    review(id: ID!): Review #Fetch a single review by ID/variable for searching by ID
    authors: [Author]
    author(id: ID!): Author #Fetch a single author by ID/variable for searching by ID
  }
  # Mutation type for adding and deleting games
  # This allows us to add new games and delete existing ones and update existing games
  type Mutation {
    addGame(game: AddGameInput!): Game
    deleteGame(id: ID!): [Game]
    updateGame(id: ID!, edits: EditGameInput): Game
  }
  # Input type for adding a new game
  # This defines the structure of the input data for adding a game
  input AddGameInput {
    title: String!,
    platform: [String!]!
  }
  # Input type for editing an existing game
  # This defines the structure of the input data for editing a game
  input EditGameInput {
    title: String,
    platform: [String!]
  }
`
//scaler types: ID, String, Int, Float, Boolean