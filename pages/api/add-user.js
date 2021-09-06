import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("user_detail")
    .insertOne(req.body);

  res.json(movies);
};