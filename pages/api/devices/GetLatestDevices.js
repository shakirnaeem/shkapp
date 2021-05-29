import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
    // await middleware(req, res);
    const { db } = await connectToDatabase();
    const devices = await db
        .collection("devices")
        .find({ isDeleted: false, isLatest: true })
        .project({ _id: 0, id: 1, brandName: 1, name: 1, price: 1, uniqueId: 1 })
        .sort({ metacritic: -1 })
        //.limit(20)
        .toArray();
    // const response = {
    //     data: devices,
    //     message: null,
    //     status: 0,
    //     totalRecords: 0
    // }
    res.status(200).json(devices);
}