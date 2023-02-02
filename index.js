const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

//my models
const DinoModel = require("./models/DinoModel");
const CavemanModel = require("./models/CavemanModel");
const { populate } = require("./models/DinoModel");

mongoose
  .connect("mongodb://127.0.0.1/Jurassic-Park")
  .then(() => {
    console.log("Great job, you connected to Jurassic Park");
  })
  .catch((err) => {
    console.log("There was an error connecting", err);
  });

//one dinosaur
const Petri = {
  name: "Petri",
  friends: ["Joshua", "Mat"],
  meatEater: true,
  longNeck: false,
  color: "blue",
};

let dinoArray = [
  {
    name: "Hopper",
    friends: ["Charlie", "Joshua", "Mat"],
    meatEater: true,
    legs: 2,
    color: "green",
  },
  {
    name: "Rex",
    friends: ["Joshua", "Mat"],
    meatEater: true,
    legs: 2,
  },
  {
    name: "Sara",
    friends: ["Charlie", "Mat"],
    meatEater: false,
    legs: 4,
    longNeck: false,
    color: "red",
  },
  {
    name: "Little Foot",
    friends: ["Charlie", "Joshua", "Mat"],
    meatEater: false,
    legs: 4,
    longNeck: true,
  },
];

//<===========create a single dino=========>
// DinoModel.create(Petri)
//   .then((newDinoInDB) => {
//     console.log("Nice, now you got a new dino", newDinoInDB);
//   })
//   .catch((err) => {
//     console.log("There was error creating the dino", err);
//   });

// DinoModel.insertMany(dinoArray)
//   .then((dinoArrDB) => {
//     console.log("the array was created", dinoArrDB);
//   })
//   .catch((err) => console.log(err));

//Reading the DB
// DinoModel.find()
//   .then((allDinos) => {
//     console.log("Here is all the dinos that you have", allDinos);
//   })
//   .catch((err) => {
//     console.log("There was error creating the dino", err);
//   });

// DinoModel.findById("63db8b6e7267d970ef21769b")
//   .then((oneDino) => {
//     console.log("Here is a dino", oneDino);
//   })
//   .catch((err) => {
//     console.log("There was error creating the dino", err);
//   });

//updating something in DB
// DinoModel.findByIdAndUpdate(
//   "63db8b6e7267d970ef21769d",
//   { color: "green" },
//   { new: true }
// )
//   .then((updatedDino) => {
//     console.log("Dino Updated", updatedDino);
//   })
//   .catch((err) => {
//     console.log("There was error creating the dino", err);
//   });
// DinoModel.findOneAndUpdate({ name: "Rex" }, { color: "green" }, { new: true })
//   .then((updatedDino) => {
//     console.log("Dino Updated", updatedDino);
//   })
//   .catch((err) => {
//     console.log("There was error creating the dino", err);
//   });

//deleting from the DB
// DinoModel.findByIdAndDelete("63db8b6e7267d970ef21769b")
//   .then((deletedDino) => {
//     console.log("Is this working?", deletedDino);
//   })
//   .catch((err) => {
//     console.log("There was error creating the dino", err);
//   });

//create some cavemen
const Josh = {
  name: "Josh",
  weapon: "smarts",
  friends: [
    "63dbb97680fb54fc74ed92e2",
    "63dbb97680fb54fc74ed92e3",
    "63dbb97680fb54fc74ed92e5",
  ],
};
// CavemanModel.create(Josh)
//   .then((caveman) => console.log("caveman created", caveman))
//   .catch((err) => console.log(err));

CavemanModel.find({ name: "Josh" })
  .populate("friends")
  .then((populatedCaveman) =>
    console.log("Populated caveman", populatedCaveman)
  )
  .catch((err) => console.log(err));
