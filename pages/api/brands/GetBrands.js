import { connectToDatabase } from "../../../util/mongodb";

import middleWare from '../../../lib/init-middleware'

export default async function handler(req, res) {
    //await middleWare(req, res);
    const { db } = await connectToDatabase();
    const brands = await db
        .collection("brands")
        .find({ isDeleted: false })
        .project({ _id: 0, id: 1, name: 1 })
        .sort({ metacritic: -1 })
        //.limit(20)
        .toArray();
    // const response = {
    //     data: brands,
    //     message: null,
    //     status: 0,
    //     totalRecords: 0
    // }
    res.send(brands);
}