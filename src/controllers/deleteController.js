import * as ChamadosModel from './../models/deleteModel.js'

export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const chamadoExiste = await ChamadosModel.findById(id);

        if (!chamadoExiste) {
            return res.status(404).json({
                erro: 'Não há chamados com esse id!',
                id: id
            })
        }

        await ChamadosModel.deletePet(id)

        res.status(200).json({
            mensagem: 'Chamado removido com sucesso',
            chamadoRemovido: chamadoExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar Chamado!',
            detalhes: error.message
        })
    }
}
