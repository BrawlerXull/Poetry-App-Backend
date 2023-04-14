const Poem = require("../schema/schema");
const express = require("express");
const app = express();
app.use(express.json());
require("../db/db");

const createNewPoem = async (req, res) => {
  const data = await Poem.insertMany({
    poem: req.body.poem,
    name: req.body.name,
  });
  res.status(200).json({ poem: data });
};

const getAllPoems = async (req, res) => {
  const data = await Poem.find({});
  res.status(200).json({ poems: data });
};

const deleteOldPoem = async (req, res) => {
  const data = await Poem.deleteOne({
    poem: req.body.poem,
    name: req.body.name,
  });
  res.status(200).json({ poem: data });
};

const getSinglePoem = async (req, res) => {
  const data = await Poem.find({ poem: req.body.poem, name: req.body.name });
  res.status(200).json({ poems: data });
};

const updateLikes = async (req, res) => {
  const data1 = await Poem.find({ poem: req.body.poem, name: req.body.name });
  var Like = data1[0]["likes"];
  var newLike = Like + 1;
  const data2 = await Poem.findOneAndUpdate(
    { poem: req.body.poem, name: req.body.name },
    { likes: newLike }
  );
  const data3 = await Poem.find({ poem: req.body.poem, name: req.body.name });
  console.log(data3[0]["likes"]);
  res.status(200).json({ poems: data3 });
};

const updatedisLikes = async (req, res) => {
  const data1 = await Poem.find({ poem: req.body.poem, name: req.body.name });
  var disLike = data1[0]["dislikes"];
  var newDisLike = disLike + 1;
  const data2 = await Poem.findOneAndUpdate(
    { poem: req.body.poem, name: req.body.name },
    { dislikes: newDisLike }
  );
  const data3 = await Poem.find({ poem: req.body.poem, name: req.body.name });
  console.log(data3[0]["dislikes"]);
  res.status(200).json({ poems: data3 });
};

module.exports = {
  createNewPoem,
  getAllPoems,
  deleteOldPoem,
  getSinglePoem,
  updateLikes,
  updatedisLikes,
};
