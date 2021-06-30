const RoomsServices = require('../services/rooms')

const getAllRooms = async (req, res) => {
    try {
        const rooms = await RoomsServices.asyncGetRooms();
        return res.json(rooms)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getRoom = async (req, res) => {
    try {
        const {id} = req.query;
        const room = await RoomsServices.asyncGetRoomById(id);
        return res.json(room)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const addRoom = async (req, res) => {
    try {
        const {name} = req.body;
        const room = await RoomsServices.asyncAddRoom(name);
        return res.json(room)
    } catch (e) {
        return res.status(400).send(String(e))
    }

}

const deleteRoom = async (req, res) => {
    try {
        const {id} = req.body;
        const status = await RoomsServices.asyncDeleteRoom(id);
        return status ? res.send('success') : res.status(404).send('hostel not found')
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getRoomByName = async (req, res) => {
    try {
        const {name} = req.body;
        const room = await RoomsServices.asyncGetRoomByName(name);
        return room ? res.json(room.room_id) : res.status(401).send('invalid hostel name')
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const updateRoom = async (req, res) => {
    try {
        const {id, updata} = req.body;
        const room = await RoomsServices.asyncUpdateRoom(id, updata);
        return res.json(room)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}


module.exports = {
    getAllRooms,
    getRoom,
    addRoom,
    deleteRoom,
    getRoomByName,
    updateRoom
}