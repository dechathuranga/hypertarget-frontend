// import { connectToDatabase } from "../../util/mongodb";
// import Head from 'next/head'

// export default async (req, res) => {
//   const { db } = await connectToDatabase();

// console.log(req.body)

//     const user_detail = await db
//     .collection("script_data")
//     .find({"scriptToken": req.body})
//     // .sort({ metacritic: -1 })
//     .limit(1)
//     .toArray();

    
//   res.json(user_detail);
// };