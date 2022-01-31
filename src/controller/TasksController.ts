import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Tasks } from '../entity/Tasks';

class TasksController {
    async execute(req: Request, res: Response) {
        const tasks = await getRepository(Tasks).find();
        return res.json(tasks);
    }

    async save(req: Request, res: Response) {
        const { title, description } = req.body;
        const task = await getRepository(Tasks).save({
            title,
            description,
        });
        return res.json(task);
    }

    async FindById(req: Request, res: Response) {
        const { id } = req.params;
        const task = await getRepository(Tasks).findOne(id);
        
        return res.json(task);
    }

    async Update(req: Request, res: Response) {
        const { id } = req.params;
        const { title, description } = req.body;

        const task = await getRepository(Tasks).update(id, { title, description });

        if(task.affected === 1) {
            const taskUpdated = await getRepository(Tasks).findOne(id);
            return res.json(taskUpdated);
        }

        return res.status(404).json({ message: 'Task not found' });

    }

    async finishedTask(req: Request, res: Response) {
        const { id } = req.params;
        const task = await getRepository(Tasks).update(id, { 
            finished: true 
        });     

        if(task.affected === 1) {
            const taskUpdated = await getRepository(Tasks).findOne(id);
            return res.json(taskUpdated);
        }

        return res.status(404).json({ message: 'Task not found' });
    }
}

export const tasksController = new TasksController(); 