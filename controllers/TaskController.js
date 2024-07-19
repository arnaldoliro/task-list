console.log('TaskController Loaded')
const prisma = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')
    }

    static async createTaskSave(req, res) {
        const {title, description} = req.body
        try {
            const newTask = await prisma.Tasks.create({
                data: {
                    title,
                    description,
                    done: false
                }
            })
            res.redirect('/tasks')
        } catch(error) {
            console.error(error)
            res.status(500).send({error: 'Erro ao criar a tarefa'})
        }
    }

    static async showTasks(req, res) {

        try {
            const tasks = await prisma.Tasks.findMany()
            console.log('Tasks fetched:', tasks)
            res.render('tasks/all', {tasks})
        } catch(error) {
            console.error('Error fetching tasks:', error);
            res.status(400).send({error: "Não foi possivel listar as tarefas"})
        }
    }

    static async removeTask(req, res) {
        const id = parseInt(req.body.id, 10)

        try {
            await prisma.Tasks.delete({where: {id} })
            res.redirect('/tasks')
        } catch(error) {
            console.error(error)
            res.status(500).send({error: "Erro ao remover tarefa"})
        }
    }

    static async updateTask(req, res) {
        const id = parseInt(req.params.id, 10)

        try {
            const task = await prisma.Tasks.findUnique({where: { id }})
            res.render('tasks/edit', { task })
        } catch(error) {
            console.error(error)
            res.status(500).send({error: 'Erro ao atualizar tarefa'})
        }
    }

    static async updateTaskPost(req, res) {
        const id = parseInt(req.body.id, 10)

        const {title, description} = req.body

        try{
            await prisma.Tasks.update({
                where: {
                    id
                },
                data: {
                    title,
                    description
                }
            })
            res.redirect('/tasks')

        } catch(error) { 
            console.log(error)
            res.status(500).send({error: "Erro ao atualizar a tarefa"})
        }
    }

    static async toggleTaskStatus(req, res) {
        
        const id = parseInt(req.body.id, 10)

        const done  = req.body.done === 'true'

        try {
            await prisma.Tasks.update({
                where: { id },
                data: { done: !done }
            })
            res.redirect('/tasks')
        } catch(error) {
            console.error(error)
            res.status(500).send({error: "Falha ao confirmar tarefa"})
        }
    }
}