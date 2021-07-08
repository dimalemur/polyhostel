const {RoomsInHostel, Rooms, Hostel} = require('../models/init-models')
const sequelize = require('sequelize');


const asyncGetRoomsInHostel = () => RoomsInHostel.findAll(
    {
        attributes: ['room_in_hostel_id'],
        include: [
            {
                model: Rooms,
                as: 'room',
                inner: true
            },
            {
                model: Hostel,
                as: 'hostel',
                inner: true
            }
        ]
    }
)

// id комнат в общежитии по id общежития
const asyncGetRoomsIdByHostelId = (id) => RoomsInHostel.findAll({
    where: {hostel_id: id},
    attributes: ['room_in_hostel_id'],
    include: [
        {
            model: Rooms,
            as: 'room',
            attributes: ['name'],
            inner: true
        },
        {
            model: Hostel,
            as: 'hostel',
            attributes: ['name'],
            inner: true
        }
    ]
})

// id общежитий по id комнаты
const asyncGetHostelsIdByRoomId = (id) => RoomsInHostel.findAll({
    where: {room_id: id},
    attributes: ['room_in_hostel_id'],
    include: [
        {
            model: Rooms,
            as: 'room',
            attributes: ['name'],
            inner: true
        },
        {
            model: Hostel,
            as: 'hostel',
            attributes: ['name'],
            inner: true
        }
    ]
})

// комната в общижитии по id
const asyncGetRoomInHostelById = (id) => RoomsInHostel.findByPk(
    id,

    {
        attributes: ['room_in_hostel_id'],
        include: [
            {
                model: Rooms,
                as: 'room',
                inner: true
            },
            {
                model: Hostel,
                as: 'hostel',
                inner: true
            }
        ]
    }).then(roomInHostel => {
    if (roomInHostel === null) {
        throw new Error('room in hostel not found')
    } else {
        return roomInHostel
    }
})

// добавление комнаты в общежитии
const asyncAddRoomInHostel = (roomId, hostelId) => RoomsInHostel.create({room_id: roomId, hostel_id: hostelId})

// удаление комнаты в общежитии
const asyncDeleteRoomInHostel = (id) => RoomsInHostel.destroy({where: {room_in_hostel_id: id}})

module.exports = {
    asyncGetRoomsInHostel,
    asyncGetRoomsIdByHostelId,
    asyncGetHostelsIdByRoomId,
    asyncGetRoomInHostelById,
    asyncAddRoomInHostel,
    asyncDeleteRoomInHostel
}