import * as ChamadoModel from './../models/techHelpModel.js'

export const listarUm = async (req,res) => {
    try {
        const id = req.params.id;
        const chamado = await ChamadoModel.findById(id);

        if (!chamado) {
            return res.status(404).json({
                erro: 'Chamado não encontrado!',
                message: 'Verifique se o id do chamado existe',
                id: id
            })
        }

        res.status(200).json({
            message: 'Chamado encontrado',
            chamado
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar chamado por id',
            detalhes: error.message
        })
    }
}
