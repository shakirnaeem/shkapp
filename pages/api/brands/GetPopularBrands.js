import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const brands = await db
        .collection("brands")
        .find({ isDeleted: false, isPopular: true })
        .project({ _id: 0 })
        .sort({ metacritic: -1 })
        //.limit(20)
        .toArray();
    const response = {
        data: brands,
        message: null,
        status: 0,
        totalRecords: 0
    }
    res.status(200).json(response);
}