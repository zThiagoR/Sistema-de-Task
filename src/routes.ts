import { Router } from 'express';
import { tasksController } from './controller/TasksController';

const router = Router()

router.get('/tasks', tasksController.execute)
router.post('/tasks', tasksController.save)
router.get('/tasks/:id', tasksController.FindById)

export default router