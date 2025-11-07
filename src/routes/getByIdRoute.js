import { Router } from "express";
import * as getByIdControllerController from './../controllers/getByIdController'

const router = Router();

router.get("/:id", getByIdController.listarUm);