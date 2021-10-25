// import { connectToDatabase } from "../../util/mongodb";

// export default async (req, res) => {
//   const { db } = await connectToDatabase();

//   console.log("date - " + req.body.key);

//   let data = {

//     name:req.body.name,
//     email:req.body.email,
//     key:req.body.key,

//   }

//   const user = await db
//     .collection("user_detail")
//     .insertOne(data);

//   res.json(user);
// };