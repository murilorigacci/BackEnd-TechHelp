import { Router } from "express";
import * as DeleteController from './../controllers/deleteController.js'

const router = Router();

router.delete("/:id", DeleteController.apagar);