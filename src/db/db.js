// Password for mongodb = 9Wd43AhrtNpxj37L
// Username = Chinmay
const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Chinmay:9Wd43AhrtNpxj37L@poetry.kyfoo2m.mongodb.net/?retryWrites=true&w=majority";
  
mongoose.connect(connectionString).then(() => {
  console.log("ok");
});
