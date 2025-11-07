import { Router } from "express";
import * as getByIdController from './../controllers/getByIdController'

const Router = Router();

Router.get("/:id", getByIdController.listarUm);