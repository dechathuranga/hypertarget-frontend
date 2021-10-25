// import { connectToDatabase } from "../../util/mongodb";
// import Head from 'next/head'

// export default async (req, res) => {
//   const { db } = await connectToDatabase();

//     const journey_detail = await db
//     .collection("journey_detail")
//     .find({"key": req.body})
//     // .sort({ metacritic: -1 })
//     .limit(1)
//     .toArray();
//   res.json(journey_detail);
// };