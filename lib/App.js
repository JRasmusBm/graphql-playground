import express from 'express';
import graphqlHTTP from "express-graphql";
import { schema } from "./Schema";
import { PORT } from "./Config";

const app = express();

app.use("*", graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);
