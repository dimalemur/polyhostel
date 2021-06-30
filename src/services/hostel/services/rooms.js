const {Rooms} = require('../models/init-models')

const asyncGetRooms = () => Rooms.findAll()

// id комнаты по номеру
const asyncGetRoomByName = (name) => Rooms.findOne({attributes: ['room_id'], where: {name}})

// комната по id
const asyncGetRoomById = (id) => Rooms.findByPk(id).then(room => {
    if (room === null) {
        throw new Error('room not found')
    } else {
        return room
    }
})

// добавление комнаты
const asyncAddRoom = (name) => Rooms.create({name})

// удаление пользователя
const asyncDeleteRoom = (id) => Rooms.destroy({where: {room_id: id}})

// изменение пользователя
const asyncUpdateRoom = (id, upData) => asyncGetRoomById(id)
    .then(() => Rooms.update(upData, {where: {room_id: id}})
        .then(() => asyncGetRoomById(id)))

module.exports = {
    asyncGetRooms,
    asyncGetRoomById,
    asyncAddRoom,
    asyncDeleteRoom,
    asyncGetRoomByName,
    asyncUpdateRoom
}