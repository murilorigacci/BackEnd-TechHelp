import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const deleteChamado = async (id) => {
    return await prisma.chamados.delete({
        where: { id: Number(id) }
    })
}