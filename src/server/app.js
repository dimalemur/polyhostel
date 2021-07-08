require('dotenv').config() // переменные окружения
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const schema = require('./schema')
const {graphqlHTTP} = require('express-graphql')

const PORT = process.env.PORT

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use('/graphql', graphqlHTTP({
        schema,
        graphiql: true
    }))

app.listen(PORT, () => console.log(`Server started on http://localhost: ${PORT}`))
