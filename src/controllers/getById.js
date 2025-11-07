import * as ChamadoModel from './../models/techHelpModel.js'

export const listarTodos = async (requestAnimationFrame, res) => {
    try {
        const chamados = await ChamadoModel.findAll();

        if(!chamados || chamados.length === 0) {
            res.status(404).json({
                total:length,
                mensagem: ' Não há chamados na lista',
                chamados
            })
        }

        res.status(200).json({
            total: chamados.length,
            mensagem: 'Lista de chamados',
            chamados
        })
    } catch (error) {
        res.status(500).json({
            erro: 'erro interno de servidor',
            detalhe: error.message,
            status: 500    
         })
    }
}
