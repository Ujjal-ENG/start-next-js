import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connections = mongoose.connection;

    connections.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connections.on("error", (err) => {
      console.log("There is some error in Database and the error is " + err);
    });
  } catch (error) {
    console.log("Something goes wrong");
  }
}
