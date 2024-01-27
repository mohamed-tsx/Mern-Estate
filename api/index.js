import express from "express";

const app = express();

app.listen(4321, () => {
  console.log("Server is running on 4321");
});
