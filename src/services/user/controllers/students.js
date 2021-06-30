const StudentServices = require('../services/students')
const {asyncGetUserById} = require("../services/users");
const {asyncGetRoomInHostelById} = require("../../hostel/services/roomsInHostel");

const getAllStudents = async (req, res) => {
    try {
        const students = await StudentServices.asyncGetStudents();
        return res.json(students)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}


const getStudent = async (req, res) => {
    try {
        const {studentid} = req.query;
        const student = await StudentServices.asyncGetStudentById(studentid);
        return res.json(student)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getStudentByUserId = async (req, res) => {
    try {
        const {userid} = req.query;
        const student = await StudentServices.asyncGetStudentByUserId(userid);
        return res.json(student)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getStudentsByRoomInHostelId = async (req, res) => {
    try {
        const {id} = req.query;
        const student = await StudentServices.asyncGetStudentsByRoomInHostelId(id);
        return res.json(student)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const getStudentsByFullName = async (req, res) => {
    try {
        const {name, surname, patronymic} = req.body;
        const student = await StudentServices.asyncGetStudentByFullName(name, surname, patronymic);
        return res.json(student)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}


const addStudent = async (req, res) => {
    const {room_in_hostel_id, user_id, name, surname, patronymic} = req.body;
    try {
        const roomInHostel = await asyncGetRoomInHostelById(room_in_hostel_id)
        const user = await asyncGetUserById(user_id);
        const student = await StudentServices.asyncAddStudent(room_in_hostel_id, user_id, name, surname, patronymic);
        return res.json(student)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const deleteStudent = async (req, res) => {
    try {
        const {id} = req.body;
        const status = await StudentServices.asyncDeleteStudent(id);
        return status ? res.send('success') : res.status(404).send('student not found')
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

const updateStudent = async (req, res) => {
    try {
        const {id, updata} = req.body;
        const student = await StudentServices.asyncUpdateStudent(id, updata);
        return res.json(student)
    } catch (e) {
        return res.status(400).send(String(e))
    }
}

module.exports = {
    getAllStudents,
    getStudent,
    getStudentByUserId,
    getStudentsByRoomInHostelId,
    getStudentsByFullName,
    addStudent,
    deleteStudent,
    updateStudent
}