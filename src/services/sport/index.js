require('dotenv').config() // переменные окружения
const express = require('express');
const cors = require('cors');

const sequelize = require('./db')
const models = require('./models/init-models')
const PORT = process.env.SPORT_PORT

const app = express();

app
    .use(cors())
    .use(express.json())

const start = async () => {
    try {
        await sequelize.authenticate() // подключение к бд
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()

