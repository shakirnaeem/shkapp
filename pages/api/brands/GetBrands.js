const { PrismaClient } = require('@prisma/client')

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
    try {
        const prisma = new PrismaClient()
        const brands = await prisma.brand.findMany()
        res.send(brands);   
    } catch (error) {
        res.send(error)
    }
}