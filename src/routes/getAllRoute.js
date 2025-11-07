import { Router } from 'express';
import * as getAllController from './../controllers/getAllController.js'

const router = Router();

router.get("/", getAllController.listarTodos);