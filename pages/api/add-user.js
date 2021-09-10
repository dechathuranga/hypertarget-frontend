import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const user = await db
    .collection("user_detail")
    .insertOne(req.body);

  res.json(user);
};