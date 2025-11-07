import * as ChamadosModel from './../models/putModel.js';

export const atualizar = async (req, res) => {
    try {
    const id = parseInt(req.params.id);
    const dados = req.body;

    const chamadoExiste = await ChamadosModel.findById(id);

    if (!chamadoExiste) {
        return res.status(404).json({
            erro: 'Chamado não encontrado com esse id',
            id: id
        })
    }

    const chamadoAtualizado = await ChamadosModel.update(id, dados);

        res.status(200).json({
            mensagem: 'Chamado atualizado com sucesso',
            chamado: chamadoAtualizado
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar chamado',
            detalhes: error.message
        })
    }
}