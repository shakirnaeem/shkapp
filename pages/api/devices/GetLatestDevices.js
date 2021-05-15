import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const devices = await db
        .collection("devices")
        .find({ isDeleted: false, isLatest: true })
        .sort({ metacritic: -1 })
        //.limit(20)
        .toArray();
    const response = {
        data: devices,
        message: null,
        status: 0,
        totalRecords: 0
    }
    res.status(200).json(response);
}