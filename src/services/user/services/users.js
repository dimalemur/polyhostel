const {Users} = require('../models/init-models')

const asyncGetUsers = () => Users.findAll()

// id пользователя по логину и паролю
const asyncGetUserByLP = (login, password) => Users.findOne({attributes: ['user_id'], where: {login, password}})

// пользователь по id
const asyncGetUserById = (id) => Users.findByPk(id).then(user => {
    if (user === null) {
        throw new Error('user not found')
    } else {
        return user
    }
})

// добавление пользователя
const asyncAddUser = (login, password) => Users.create({login, password})

// удаление пользователя
const asyncDeleteUser = (id) => Users.destroy({where: {user_id: id}})

// изменение пользователя
const asyncUpdateUser = (id, upData) => asyncGetUserById(id)
    .then(() => Users.update(upData, {where: {user_id: id}})
        .then(() => asyncGetUserById(id)))

module.exports = {
    asyncGetUsers,
    asyncGetUserById,
    asyncAddUser,
    asyncDeleteUser,
    asyncGetUserByLP,
    asyncUpdateUser
}