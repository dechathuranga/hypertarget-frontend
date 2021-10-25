// import { connectToDatabase } from "../../util/mongodb";
// import Head from 'next/head'

// export default async (req, res) => {
//   const { db } = await connectToDatabase();

//     const script_data = await db
//     .collection("script_data")
//     .find({"url": req.body})
//     // .sort({ metacritic: -1 })
//     // .limit(1)
//     .toArray();
//   res.json(script_data);
// };