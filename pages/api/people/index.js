const { PrismaClient } = require('@prisma/client')

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    // const newUser = await prisma.brand.create({
    //     data: {
    //         id: 1,
    //         name: 'Alice2',
    //         uniqueId: 'alice@prisma.io',
    //         uniqueId2: 'alice@prisma.io',
    //         isPopular: true,
    //         position: 1
    //     },
    // })
    const deleteUser = await prisma.brand.deleteMany()
    const users = await prisma.brand.findMany()
    res.status(200).json({ firstName: 'Shakir', lastName: 'Naeem' });
}