import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const findById = async (id) => {
    return await prisma.chamados.findUnique({
        where: { id: Number(id)}
    });
}