
import { Router } from 'express';
import * as techHelpController from './../controllers/techHelpController.js'

const router = Router();

router.get('/status', techHelpController.listarStatus);
router.get('/prioridade', techHelpController.listarPrioridade);
router.get('/responsavel', techHelpController.listarResponsavel);
router.get('/', techHelpController.listarTodos);
router.get('/:id', techHelpController.listarUm);
router.post('/', techHelpController.criar);
router.put('/:id', techHelpController.atualizar);
router.delete('/:id', techHelpController.apagar);

export default router;