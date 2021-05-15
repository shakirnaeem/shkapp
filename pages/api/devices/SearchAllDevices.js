import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
    //const prisma = new PrismaClient()



    // const resData = await fetch(`https://service.pakmobilezone.com/api/Devices/GetDevices?RequestModel.PriceRange=0&PageNo=1&PageSize=0`)
    // const dataAll = await resData.json()
    // const data = dataAll.data
    // if (dataAll) {
    //     if (data.length > 0) {
    //         for (var i = 0; i < 1000; i++) {
    //             const user = await prisma.device.create({
    //                 data: {
    //                     id: data[i].id,
    //                     name: data[i].name,
    //                     uniqueId: data[i].uniqueId,
    //                     image: data[i].image,
    //                     description: data[i].description,
    //                     position: data[i].position,
    //                     price: data[i].price,
    //                     network: data[i].network,
    //                     externalModel1: data[i].externalModel1,
    //                     externalModel2: data[i].externalModel2,
    //                     isLatest: data[i].isLatest,
    //                     brandUniqueId: data[i].brandUniqueId,
    //                     brandName: data[i].brandName,
    //                     isDeleted: data[i].isDeleted,
    //                     brandId: data[i].brandId
    //                 },
    //             })
    //         }
    //     }
    // }

    //await prisma.device.deleteMany();

    // const devices = await prisma.device.findMany({
    //     select: {
    //         id: true,
    //         name: true,
    //     },
    // })

    const { db } = await connectToDatabase();
    const devices = await db
        .collection("devices")
        .find({ isDeleted: false })
        .project({ id: 1, name: 1, _id: 0 })
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