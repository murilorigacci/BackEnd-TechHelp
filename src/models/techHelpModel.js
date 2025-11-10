import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const deleteChamado = async (id) => {
    return await prisma.chamados.delete({
        where: { id: Number(id) }
    })
}

export const findAll = async () => {
    return await prisma.chamados.findMany({
     orderBy: { id: 'asc' }
    });
}

export const findById = async (id) => {
    return await prisma.chamados.findUnique({
        where: { id: Number(id)}
    });
}

export const findWithFilters = async ({ status, prioridade, responsavel }) => {
    const where = {};

    const conditions = [];

    if (status) {
        // case-insensitive match for status
        conditions.push({ status: { equals: String(status), mode: 'insensitive' } });
    }

    if (prioridade) {
        // case-insensitive match for prioridade
        conditions.push({ prioridade: { equals: String(prioridade), mode: 'insensitive' } });
    }

    if (responsavel !== undefined && responsavel !== null && responsavel !== '') {
        const id = Number(responsavel);
        if (!Number.isNaN(id)) {
            conditions.push({ responsavelId: id });
        } else {
            // if responsavel is not numeric, try matching by related Usuario name is out of scope here
        }
    }

    if (conditions.length > 0) where.AND = conditions;

    return await prisma.chamados.findMany({
        where,
        orderBy: { id: 'asc' }
    });
}

export const create = async (data) => {
    const now = new Date();

    const criadoPorId = data.criadoPorId !== undefined && data.criadoPorId !== null ? Number(data.criadoPorId) : null;
    const responsavelId = data.responsavelId !== undefined && data.responsavelId !== null ? Number(data.responsavelId) : null;

    return await prisma.chamados.create({
        data: {
            descricao: data.descricao,
            status: data.status,
            prioridade: data.prioridade,
            criadoEm: now,
            atualizadoEm: now,
            criadoPorId,
            responsavelId
        }
    });
}

export const update = async (id, data) => {
    const atualizadoEm = new Date();

    const payload = { ...data, atualizadoEm };

    if (payload.criadoPorId !== undefined && payload.criadoPorId !== null) {
        payload.criadoPorId = Number(payload.criadoPorId);
    }
    if (payload.responsavelId !== undefined && payload.responsavelId !== null) {
        payload.responsavelId = Number(payload.responsavelId);
    }

    Object.keys(payload).forEach((k) => payload[k] === undefined && delete payload[k]);

    return await prisma.chamados.update({
        where: { id: Number(id) },
        data: payload
    });
}

export const usuarioExists = async (id) => {
    if (id === undefined || id === null) return false;
    const uid = Number(id);
    if (Number.isNaN(uid)) return false;
    const user = await prisma.usuario.findUnique({ where: { id: uid } });
    return !!user;
}

