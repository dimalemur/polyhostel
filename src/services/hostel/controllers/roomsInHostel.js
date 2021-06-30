const RoomsInHostelServices = require('../services/roomsInHostel')

const getAllRoomsInHostel = async (req, res) => {
    try {
        const roomsInHostel = await RoomsInHostelServices.asyncGetRoomsInHostel();
        return res.json(roomsInHostel)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getRoomInHostel = async (req, res) => {
    try {
        const {id} = req.query;
        const roomInHostel = await RoomsInHostelServices.asyncGetRoomInHostelById(id);
        return res.json(roomInHostel)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

// общежития по комнате
const getHostelsIdByRoomId = async (req, res) => {
    try {
        const {id} = req.query;
        const hostels = await RoomsInHostelServices.asyncGetHostelsIdByRoomId(id);
        return res.json(hostels)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

// комнаты по общежитию
const getRoomsIdByHostelId = async (req, res) => {
    try {
        const {id} = req.query;
        const hostels = await RoomsInHostelServices.asyncGetRoomsIdByHostelId(id);
        return res.json(hostels)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const addRoomInHostel = async (req, res) => {
    try {
        const {room_id, hostel_id} = req.body;
        const roomInHostel = await RoomsInHostelServices.asyncAddRoomInHostel(room_id, hostel_id);
        return res.json(roomInHostel)
    } catch (e) {
        return res.status(400).send(String(e))
    }

}

const deleteRoomInHostel = async (req, res) => {
    try {
        const {id} = req.body;
        const status = await RoomsInHostelServices.asyncDeleteRoomInHostel(id);
        return status ? res.send('success') : res.status(404).send('hostel not found')
    } catch (e) {
        return res.status(400).send(String(e))
    }
}


module.exports = {
    getAllRoomsInHostel,
    getRoomInHostel,
    getHostelsIdByRoomId,
    getRoomsIdByHostelId,
    addRoomInHostel,
    deleteRoomInHostel,
}