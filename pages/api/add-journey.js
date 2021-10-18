import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  console.log("date - " + req.body.journeyName);
  let d = new Date().toLocaleString();


  let data = {

    journeyName:req.body.journeyName,
    layerNo:req.body.layerNo,
    event:req.body.event,
    key:req.body.key,
    stepName:req.body.stepName,
    createDate:d,

  }

  const user = await db
    .collection("journey_detail")
    .insertOne(data);

  res.json(user);
};