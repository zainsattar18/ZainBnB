import express from "express";

const app = express();
const PORT = 9000;

const one = 1;
const two = 2;



const name = "Zain";

app.get("/", (_req, res) =>
  res.send(`1 + 2 = ${one + two}`)
);

app.listen(PORT);

console.log(`Listening on port ${PORT}`);
