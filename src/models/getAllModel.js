import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findAll = async () => {
   return await prisma.chamados.findMany({
    orderBy: { nome: 'asc' }
   });
}