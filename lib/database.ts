import mongoose from "mongoose";

let connected = false;

export function connectToDB() {
  if (!process.env.MONGO_URL) {
    console.log("Missing MONGO_URL!!!");
    return;
  }
  if (connected) {
    console.log("Already connected to DB");
    return;
  }
  try {
    mongoose.connect(process.env.MONGO_URL);
    connected = true;
  } catch (err) {
    console.log(err);
  }
}
