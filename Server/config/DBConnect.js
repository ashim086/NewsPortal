import mongoose from "mongoose";

export default async function DbConnection() {
  await mongoose
    .connect(process.env.MONGODBURI)
    .then(() => {
      console.log("Mongodb connected Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
