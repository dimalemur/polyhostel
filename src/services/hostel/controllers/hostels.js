const HostelsServices = require('../services/hostels')

const getAllHostels = async (req, res) => {
    try {
        const hostels = await HostelsServices.asyncGetHostels();
        return res.json(hostels)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getHostel = async (req, res) => {
    try {
        const {hostelid} = req.query;
        const hostel = await HostelsServices.asyncGetHostelById(hostelid);
        return res.json(hostel)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const addHostel = async (req, res) => {
    try {
        const {name, type} = req.body;
        const hostel = await HostelsServices.asyncAddHostel(name, type);
        return res.json(hostel)
    } catch (e) {
        return res.status(400).send(String(e))
    }

}

const deleteHostel = async (req, res) => {
    try {
        const {id} = req.body;
        const status = await HostelsServices.asyncDeleteHostel(id);
        return status ? res.send('success') : res.status(404).send('hostel not found')
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getHostelByName = async (req, res) => {
    try {
        const {name} = req.body;
        const hostel = await HostelsServices.asyncGetHostelByName(name);
        return hostel ? res.json(hostel.hostel_id) : res.status(401).send('invalid hostel name')
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const updateHostel = async (req, res) => {
    try {
        const {id, updata} = req.body;
        const user = await HostelsServices.asyncUpdateHostel(id, updata);
        return res.json(user)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}


module.exports = {
    getAllHostels,
    getHostel,
    addHostel,
    deleteHostel,
    getHostelByName,
    updateHostel
}