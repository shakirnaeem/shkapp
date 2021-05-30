import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const brandId = req.query['brandId']
    let filters = {
        isDeleted: false
    }
    if (brandId) {
        filters['brandId'] = Number(brandId)
    }
    const devices = await db
        .collection("devices")
        .find(filters)
        .project({ _id: 0, id: 1, brandName: 1, name: 1, price: 1, uniqueId: 1 })
        .sort({ metacritic: -1 })
        //.limit(2)
        .toArray();
    res.status(200).json(devices);
}