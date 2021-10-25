import { connectToDatabase } from "../../util/mongodb";
import Head from 'next/head'

export default async (req, res) => {
  const { db } = await connectToDatabase();

    const user_detail = await db
    .collection("user_detail")
    .find({"email": req.query.val})
    // .sort({ metacritic: -1 })
    .limit(1)
    .toArray();
  res.json(user_detail);
};