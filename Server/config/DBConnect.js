import mongoose from "mongoose";

export default async function DbConnection() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Mongodb connected Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
