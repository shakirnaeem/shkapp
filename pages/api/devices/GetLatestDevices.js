const { PrismaClient } = require('@prisma/client')

export default async function handler(req, res) {
    const prisma = new PrismaClient()

    const devices = await prisma.device.findMany({
        where: {
            isLatest: true,
        },
    })
    res.status(200).json(devices);
}