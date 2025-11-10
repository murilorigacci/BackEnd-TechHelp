import * as ChamadosModel from './../models/techHelpModel.js';

export const listarTodos = async (req, res) => {
    try {
        const { status, prioridade, responsavel } = req.query;

        if (status || prioridade || responsavel) {
            const chamados = await ChamadosModel.findWithFilters({ status, prioridade, responsavel });

            if (!chamados || chamados.length === 0) {
                return res.status(404).json({
                    total: 0,
                    mensagem: 'Nenhum chamado encontrado com os filtros fornecidos',
                    chamados: []
                });
            }

            return res.status(200).json({
                total: chamados.length,
                mensagem: 'lista de chamados (filtrada)',
                chamados
            });
        }

        const chamados = await ChamadosModel.findAll();

        if (!chamados || chamados.length === 0) {
            return res.status(404).json({
                total: 0,
                mensagem: 'Não há chamados na lista',
                chamados: []
            });
        }

        return res.status(200).json({
            total: chamados.length,
            mensagem: 'lista de chamados',
            chamados
        });
    } catch (error) {
        return res.status(500).json({
            erro: 'erro interno do servidor',
            detalhes: error.message,
            status: 500
        });
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const chamado = await ChamadosModel.findById(id);

        if (!chamado) {
            return res.status(404).json({
                erro: 'Chamado não encontrado!',
                message: 'Verifique se o id do chamado existe',
                id: id
            });
        }

        return res.status(200).json({
            message: 'Chamado encontrado',
            chamado
        });
    } catch (error) {
        return res.status(500).json({
            erro: 'Erro ao buscar chamado por id',
            detalhes: error.message
        });
    }
};

export const criar = async (req, res) => {
    try {
        const dado = req.body;

        const camposObrigatorios = ['descricao', 'status', 'prioridade'];
        const faltando = camposObrigatorios.filter((campo) => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

        // validar criadoPorId e responsavelId (se fornecidos)
        if (dado.criadoPorId !== undefined && dado.criadoPorId !== null) {
            const exists = await ChamadosModel.usuarioExists(dado.criadoPorId);
            if (!exists) {
                return res.status(400).json({ erro: 'criadoPorId não encontrado no banco' });
            }
        }

        if (dado.responsavelId !== undefined && dado.responsavelId !== null) {
            const exists = await ChamadosModel.usuarioExists(dado.responsavelId);
            if (!exists) {
                return res.status(400).json({ erro: 'responsavelId não encontrado no banco' });
            }
        }

        const novoChamado = await ChamadosModel.create(dado);

        return res.status(201).json({
            mensagem: 'Chamado criado com sucesso!',
            chamado: novoChamado
        });
    } catch (error) {
        return res.status(500).json({
            erro: 'Erro ao criar o chamado',
            detalhes: error.message
        });
    }
};

export const atualizar = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const dados = req.body;

        const chamadoExiste = await ChamadosModel.findById(id);

        if (!chamadoExiste) {
            return res.status(404).json({
                erro: 'Chamado não encontrado com esse id',
                id: id
            });
        }

        const chamadoAtualizado = await ChamadosModel.update(id, dados);

        return res.status(200).json({
            mensagem: 'Chamado atualizado com sucesso',
            chamado: chamadoAtualizado
        });
    } catch (error) {
        return res.status(500).json({
            erro: 'Erro ao atualizar chamado',
            detalhes: error.message
        });
    }
};

export const apagar = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const chamadoExiste = await ChamadosModel.findById(id);
        if (!chamadoExiste) {
            return res.status(404).json({ erro: 'Chamado não encontrado', id });
        }

        await ChamadosModel.deleteChamado(id);
        return res.status(204).json({ mensagem: 'Chamado apagado com sucesso' });
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao apagar chamado', detalhes: error.message });
    }
};

export const listarStatus = async (req, res) => {
    try {
        const chamados = await ChamadosModel.findAll();
        const status = [...new Set(chamados.map((c) => c.status).filter(Boolean))];

        if (status.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhum status encontrado!' });
        }

        return res.status(200).json(status);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar status', detalhes: error.message });
    }
};

export const listarPrioridade = async (req, res) => {
    try {
        const chamados = await ChamadosModel.findAll();
        const prioridades = [...new Set(chamados.map((c) => c.prioridade).filter(Boolean))];

        if (prioridades.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhuma prioridade encontrada!' });
        }

        return res.status(200).json(prioridades);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar prioridades', detalhes: error.message });
    }
};

export const listarResponsavel = async (req, res) => {
    try {
        const chamados = await ChamadosModel.findAll();
        const responsaveis = [...new Set(chamados.map((c) => c.responsavelId).filter(Boolean))];

        if (responsaveis.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhum responsável encontrado!' });
        }

        return res.status(200).json(responsaveis);
    } catch (error) {
        return res.status(500).json({ erro: 'Erro ao listar responsáveis', detalhes: error.message });
    }
};

