require('dotenv').config() // переменные окружения
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const sequelize = require('./db')
require('./models/init-models')
const PORT = process.env.USER_PORT

const app = express();

const UserControllers = require('./controllers/users')
const StudentControllers = require('./controllers/students')

app
    .use(cors())
    .use(express.json())
    .use(bodyParser.urlencoded({extended: false}))

    .get('/allusers', UserControllers.getAllUsers) //получить всех пользователей
    .get('/user', UserControllers.getUser) // получить пользователя по id
    .post('/userbylp', UserControllers.getUserByLP) // получить пользователя по логину и паролю
    .post('/user', UserControllers.addUser) // добавить пользователя
    .delete('/user', UserControllers.deleteUser) // добавить пользователя
    .patch('/user', UserControllers.updateUser) // изменить пользователя

    .get('/allstudents', StudentControllers.getAllStudents)
    .get('/student', StudentControllers.getStudent)
    .get('/studentbyuser', StudentControllers.getStudentByUserId)
    .get('/studentsbyroominhostel', StudentControllers.getStudentsByRoomInHostelId)
    .post('/studentsbyfullname', StudentControllers.getStudentsByFullName)
    .post('/student', StudentControllers.addStudent)
    .patch('/student', StudentControllers.updateStudent)
    .delete('/student', StudentControllers.deleteStudent)

const start = async () => {
    try {
        await sequelize.authenticate() // подключение к бд
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on http://localhost: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

