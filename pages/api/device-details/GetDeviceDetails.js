import { connectToDatabase } from "../../../util/mongodb";
import DeviceDetailModel from '../../../models/device-detail-model';

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const uniqueId = req.query['uniqueId']
    let filters = {
        DeviceUniqueId: uniqueId
    }

    const deviceDetailsList = await db
        .collection("deviceDetails")
        .find(filters)
        .project({ _id: 0 })
        .sort({ metacritic: -1 })
        .limit(1)
        .toArray();

    console.log(deviceDetailsList)

    var model = Object.seal(new DeviceDetailModel());
    if (deviceDetailsList && deviceDetailsList.length > 0) {
        model = Object.assign(model, deviceDetailsList[0]);
    }
    console.log(model)
    res.status(200).json(model);
}