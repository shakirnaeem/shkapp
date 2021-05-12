const { PrismaClient } = require('@prisma/client')

export default async function handler(req, res) {
    const prisma = new PrismaClient()

    const brands = await prisma.brand.findMany({
        where: {
            isPopular: true
        }
    })
    res.status(200).json(brands);
}