import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const app = express()
app.use(express.json())
const PORT = "3000"


app.post('/usuarios', async (req, res) => {

    await prisma.user.create({
        data :{
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(req.body)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data :{
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: 'Usuário deletado com sucesso' })
})

app.get('/usuarios', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age 
            }
        })
    }else{
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

app.listen(PORT,() => console.log(`Funcionando na porta ${PORT}`))

/*
    criar api de usuários:

    -criar um usuário 
    - listagem de usuários
    - editar um usuário
    - Deletar um usuário
    
    Joziberto
    IIn5gWBKf7x7vzjK
*/