import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  let user = {
    name : 'test',
    email : 'asdasd@asd.com',
    message : 'hi',
    _id : 45245
  }


  const movies = await db
    .collection("user_detail")
    .insertOne(user);
    // .find({})
    // .sort({ metacritic: -1 })
    // .limit(20)
    // .toArray();

  res.json(movies);
};