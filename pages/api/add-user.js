import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  console.log("date - " + req.body);

  const user = await db
    .collection("user_detail")
    .insertOne(req);

  res.json(user);
};