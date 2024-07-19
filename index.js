const express = require('express')
const { engine } = require('express-handlebars')
const app = express()

const tasksRoutes = require('./routes/taskRoutes')



app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/', tasksRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})