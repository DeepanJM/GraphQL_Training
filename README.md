# GRAPHQL TRAINING

## Overview
This project demonstrates the implementation of a schema and the use of GraphQL to retrieve data.

## Project Structure
```
GRAPHQL_TRAINING
├── _db.js
├── index.js
├── schema.js

```

## Key Features
- Implementation of different schemas/type definitions
    - type Query
    - type Mutation
    - input AddGameInput
    - input EditGameInput
- Implementation of different resolvers
    - Query
    - Mutations
- Implementation of variables

## Getting Started
1. Install dependencies:
```bash
npm init -y
```

2. Install module pacakge:
```bash
npm pkg set type="module"
```

3. Install Apollo Server:
```bash
npm install @apollo/server graphql
```
4. Run Apollo Interface:
```bash
node index
```
5. Launching the Apollo Interface:
```bash
Open a browser & type in "localhost:{port}"
    - In this solution the URL will be localhost:8080
The port is stored in the "index.js" & can be changed to your liking
```

## Target Application
Apollo Server: https://www.apollographql.com/docs/apollo-server/getting-started

## Resource
Training Video: https://www.youtube.com/watch?v=xMCnDesBggM&list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y&index=1        
  - Practicle resources: https://github.com/iamshaunjp/graphql-crash-course/tree/main
