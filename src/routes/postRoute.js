import { Router } from 'express';
import * as postController from './../controllers/postController.js'

const Router = Router();

Router.post("/", postController.criar);