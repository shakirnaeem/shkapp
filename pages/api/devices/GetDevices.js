import { connectToDatabase } from "../../../util/mongodb";
import middleware from '../../../lib/init-middleware';

export default async function handler(req, res) {
    await middleware(req, res);
    const { db } = await connectToDatabase();
    const brandId = req.query['requestModel.brandId']
    let filters = {
        isDeleted: false
    }
    if (brandId) {
        filters['brandId'] = Number(brandId)
    }
    console.log(filters);
    const devices = await db
        .collection("devices")
        .find(filters)
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