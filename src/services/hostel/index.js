require('dotenv').config() // переменные окружения
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const sequelize = require('./db')
const HostelControllers = require('./controllers/hostels')
const RoomControllers = require('./controllers/rooms')
const RoomsInHostelControllers = require('./controllers/roomsInHostel')
const models = require('./models/init-models')
const PORT = process.env.HOSTEL_PORT

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(bodyParser.urlencoded({extended: false}))
    .get('/allhostels', HostelControllers.getAllHostels)
    .get('/hostel', HostelControllers.getHostel)
    .post('/hostel', HostelControllers.addHostel)
    .delete('/hostel', HostelControllers.deleteHostel)
    .post('/hostelbyname', HostelControllers.getHostelByName)

    .get('/allrooms', RoomControllers.getAllRooms)
    .get('/room', RoomControllers.getRoom)
    .post('/room', RoomControllers.addRoom)
    .delete('/room', RoomControllers.deleteRoom)
    .post('/roombyname', RoomControllers.getRoomByName)
    .patch('/room', RoomControllers.updateRoom)

    .get('/allroomsinhostel', RoomsInHostelControllers.getAllRoomsInHostel)
    .get('/roominhostel', RoomsInHostelControllers.getRoomInHostel)
    .get('/hostelsbyroom', RoomsInHostelControllers.getHostelsIdByRoomId)
    .get('/roomsbyhostel', RoomsInHostelControllers.getRoomsIdByHostelId)
    .post('/roominhostel', RoomsInHostelControllers.addRoomInHostel)
    .delete('/roominhostel', RoomsInHostelControllers.deleteRoomInHostel)




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

