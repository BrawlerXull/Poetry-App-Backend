require("./src/db/db");
const express = require("express");
const app = express();
app.use(express.json());

const {createNewPoem,getAllPoems,deleteOldPoem,getSinglePoem,updateLikes,updatedisLikes,signup,login} = require("./src/methods/methods");

app.get("/all",getAllPoems);
app.post("/signup",signup);
app.post("/login",login);
const {createNewPoem,getAllPoems,deleteOldPoem,getSinglePoem,updateLikes,updatedisLikes} = require("./src/methods/methods");

app.get("/all",getAllPoems);
app.post("/create",createNewPoem);
app.post("/delete",deleteOldPoem);
app.post("/single",getSinglePoem);
app.post("/like",updateLikes);
app.post("/dislike",updatedisLikes);


app.listen("5005", () => {
  console.log("connected to the port");
});
