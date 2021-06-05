import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const brandId = req.query['brandId']
    const pageSize = isNaN(req.query['PageSize']) ? 100 : Number(req.query['PageSize'])
    const page = isNaN(req.query['Page']) ? 0 : Number(req.query['Page'])
    let filters = {
        isDeleted: false
    }
    if (brandId) {
        filters['brandId'] = Number(brandId)
    }

    const devices = await db
        .collection("devices")
        .aggregate([
            {
                "$facet": {
                    "data": [
                        { "$sort": { id: 1 } },
                        { "$match": filters },
                        { "$project": { _id: 0, id: 1, brandName: 1, name: 1, price: 1, uniqueId: 1 } },
                        { "$skip": pageSize * (page - 1) },
                        { "$limit": pageSize }
                    ],
                    "totalCount": [
                        { "$match": filters },
                        { "$count": "count" }
                    ]
                }
            }
        ])
        .toArray();
    const totalCount = devices[0].totalCount.length > 0 ? devices[0].totalCount[0].count : 0
    const response = { brandDevices: devices[0].data, totalCount }
    res.status(200).json(response);
}