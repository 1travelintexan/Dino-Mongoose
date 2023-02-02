const { Schema, model } = require("mongoose");

const dinoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  friends: [String],
  meatEater: Boolean,
  legs: Number,
  longNeck: Boolean,
  color: {
    type: String,
    enum: ["red", "blue", "green"],
  },
});

const DinoModel = model("dino", dinoSchema);
module.exports = DinoModel;
