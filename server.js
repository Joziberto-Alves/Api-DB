import express from "express"

const app = express()
app.use(express.json())
const PORT = "3000"
const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
})



app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(PORT,() => console.log(`Funcionando na porta ${PORT}`))

/*
    criar api de usuários:

    -criar um usuário 
    - listagem de usuários
    - editar um usuário
    - Deletar um usuário
*/