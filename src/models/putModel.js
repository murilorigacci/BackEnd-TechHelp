import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const update = async (id, data) => {
   return await prisma.chamados.update({
      where: { id: Number(id) },
      data: {
         ...(data.nome && { nome: data.nome }),
         ...(data.descricao && { descricao: data.descricao }),
         ...(data.status && { status: data.status }),
         ...(data.prioridade && { prioridade: data.prioridade }),
         ...(data.criadoEm && { criadoEm: data.criadoEm }),
         ...(data.atualizadoEm && { atualizadoEm: data.atualizadoEm }),
      }
   })
}