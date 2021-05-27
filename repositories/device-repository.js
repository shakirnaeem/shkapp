import { connectToDatabase } from "../util/mongodb";

export default class DeviceRepository {
    async GetBrandDevices(id) {
        const brandDevices = await db
            .collection("devices")
            .find({ isDeleted: false, brandId: id })
            .project({ _id: 0, id: 1, brandName: 1, name: 1, price: 1, uniqueId: 1 })
            .sort({ metacritic: -1 })
            //.limit(20)
            .toArray();

        return {
            props: { brandDevices }, // will be passed to the page component as props
        }
    }
}