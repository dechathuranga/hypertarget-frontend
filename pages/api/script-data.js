// import Cors from 'cors'
// import initMiddleware from './init-middleware'
// import { connectToDatabase } from "../../util/mongodb";

// // Initialize the cors middleware
// const cors = initMiddleware(
//   // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
//   Cors({
//     // Only allow requests with GET, POST and OPTIONS
//     methods: ['GET', 'POST', 'OPTIONS'],
//   })
// )

// export default async function handler(req, res) {
//     const { db } = await connectToDatabase();
//   // Run cors
//   await cors(req, res)

//   console.log("date - " + req.body.tagName);

//   let d = new Date().toLocaleString();

//   let data = {

//     url:req.body.url,
//     scriptToken:req.body.scriptToken,
//     tagName:req.body.tagName,
//     value:req.body.value,
//     type:req.body.type,
//     alt:req.body.alt,
//     name:req.body.name,
//     elementId:req.body.elementId,
//     eventType:req.body.eventType,
//     innerText:req.body.innerText,
//     currentIp:req.body.currentIp,
//     createDate:d

//   }

//   const user = await db
//     .collection("script_data")
//     .insertOne(data);

// //   res.json(user);

//   // Rest of the API logic
//   res.json({ message: 'Hello Everyone!' })
// }