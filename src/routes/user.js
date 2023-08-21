import express from 'express';
import controller from '../controller/UserController';
const router = express.Router();

router.get('/', controller.main); 

export default router;