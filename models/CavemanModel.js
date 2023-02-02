const { Schema, model } = require("mongoose");

const cavemanSchema = new Schema({
  name: {
    type: String,
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "dino",
    },
  ],
  weapon: {
    type: String,
    enum: ["spear", "rock", "smarts"],
  },
});

const CavemanModel = model("caveman", cavemanSchema);
module.exports = CavemanModel;
