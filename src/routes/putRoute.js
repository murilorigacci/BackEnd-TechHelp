import { Router } from 'express';
import * as putController from './../controllers/putController.js'

const Router = Router();

Router.put("/:id", putController.atualizar);