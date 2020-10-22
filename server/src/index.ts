import express from "express";
import { ApolloServer } from "apollo-server-express";
// import bodyParser from "body-parser";
// import { listings } from "./listing";
// import { schema } from "./graphql";
import { typeDefs, resolvers } from "./graphql/index";

const app = express();

// app.use(bodyParser.json());

const PORT = 9000;

// Adding in our schema in separately; if we do not have to have typeDefs OR resolvers files. Called it above on line 5 from the graphql.ts file

// const server = new ApolloServer({ schema });

const server = new ApolloServer({ typeDefs,resolvers });
server.applyMiddleware({ app, path: "/api" });

app.listen(PORT);

console.log(`Listening on port ${PORT}`);


//creating an express route using node below; 

// app.get("/listings", (_req, res) => {
//   return res.send({ listings });
// });

// app.post("/delete-listing", (req, res) => {
//   const id: string = req.body.id;
//   for (let i = 0; i < listings.length; i++) {
//     if (listings[i].id === id) {
//       return res.send(listings.splice(i, 1)[0]);
//     }
//   }
//   return res.send("Failed to delete listing");
// });
