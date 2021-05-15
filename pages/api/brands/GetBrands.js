import { connectToDatabase } from "../../../util/mongodb";

export default async function handler(req, res) {
    //const prisma = new PrismaClient()

    // const resData = await fetch(`https://service.pakmobilezone.com/api/Brands`)
    // const dataAll = await resData.json()
    // const data = dataAll.data
    // if (dataAll) {
    //     if (data.length > 0) {
    //         for (var i = 0; i < data.length; i++) {
    //             const user = await prisma.brand.create({
    //                 data: {
    //                     id: data[i].id,
    //                     name: data[i].name,
    //                     position: data[i].position,
    //                     isDeleted: data[i].isDeleted,
    //                     isPopular: data[i].isPopular
    //                 },
    //             })
    //         }
    //     }
    // }    
    //const brands = await prisma.brands.findMany()
    const { db } = await connectToDatabase();
    const brands = await db
        .collection("brands")
        .find({name: 'Apple'})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();
    res.send(brands);
}