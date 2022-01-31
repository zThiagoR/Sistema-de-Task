import { Router } from 'express';
import { tasksController } from './controller/TasksController';

const router = Router()

router.get('/tasks', tasksController.execute)
router.post('/tasks', tasksController.save)
router.get('/tasks/:id', tasksController.FindById)
router.put('/tasks/:id', tasksController.Update)
router.patch('/tasks/:id', tasksController.finishedTask)

export default router