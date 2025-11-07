import * as ChamadosModel from './../models/postModel.js';

export const criar = async (req, res) => {
    try {
       
        const { nome, descricao, status, prioridade, criadoEm, atualizadoEm } = req.body

        const dado = req.body

        const camposObrigatorios = ['nome', 'descricao'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }


        const novoChamado = await ChamadosModel.create(dado);

        res.status(201).json({
            mensagem: 'Chamado criado com sucesso!',
            chamado: novoChamado
        })


    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar o chamado',
            detalhes: error.message
        })
    }
}