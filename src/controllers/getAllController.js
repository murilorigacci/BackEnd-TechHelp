import * as ChamadosModel from './../models/chamadosModel.js';

export const listarTodos = async (req, res) => {
    try {
        const chamados = await ChamadosModel.findAll();

        if (!chamados || chamados.length === 0) {
            res.status(404).json({
                total: pets.length,
                mensagem: 'Não há chamados na lista',
                chamados
            })
            
        }

        res.status(200).json({
            total: pets.length,
            mensagem: 'lista de chamados',
            chamados
        })

    } catch (error) {
    res.status(500).json({ 
        erro: 'erro interno do servidor',
        detalhes: error.message,
        status: 500
       })
    }
}
