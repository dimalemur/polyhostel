require('dotenv').config() // переменные окружения
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const PORT = process.env.PORT

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(bodyParser.urlencoded({extended: false}))

app.listen(PORT, () => console.log(`Server started on http://localhost: ${PORT}`))
