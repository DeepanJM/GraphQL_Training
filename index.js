import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// data
import db from './_db.js'

//types 
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id) //added to fetch a single game by ID
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id) //added to fetch a single author by ID
    },
    reviews() {
      return db.reviews
    },
     review(_, args) {
      return db.reviews.find((review) => review.id === args.id) //added to fetch a single review by ID
    }
  },
  // Resolvers for nested fields. Game, Review, and Author types
  // Returns reviews for a game
  Game: {
    reviews(parent) {
      return db.reviews.filter((r) => r.game_id === parent.id)
    }
  },
  // Resolving nested fields for Review, Author and Game
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id)
    },
    game(parent) {
      return db.games.find((g) => g.id === parent.game_id)
    }
  },
  // Resolving nested fields for Author
  // Returns reviews for an author
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id)
    }
  },
  // Mutation resolvers for adding and deleting games
  // This allows us to add new games and delete existing ones
  Mutation: {
    addGame(_, args) {
      let game = {
        ...args.game, 
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.games.push(game)

      return game
    },
    // Deletes a game by ID and returns the updated list of games
    deleteGame(_, args) {
      db.games = db.games.filter((g) => g.id !== args.id)

      return db.games
    },
    // Updates an existing game by ID and returns the updated game
    // This allows us to edit the title and platform of an existing game
    updateGame(_, args) {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return {...g, ...args.edits}
        }

        return g
      })

      return db.games.find((g) => g.id === args.id)
    }
  }
}

//server setup
const server = new ApolloServer({
    typeDefs, // GraphQL schema definitions
    resolvers //functions to resolve the data
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 8080 }
})

console.log('🚀 Server ready at:', 8080)