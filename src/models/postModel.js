import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async (data) => {
   return await prisma.chamados.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        status: data.status,
        prioridade: data.prioridade,
        criadoEm: data.criadoEm,
        atualizadoEm: data.atualizadoEm
      }
   })

}