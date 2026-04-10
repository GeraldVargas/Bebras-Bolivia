import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// User routes
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);

export default router;
