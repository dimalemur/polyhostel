const {Students} = require('../models/init-models')

const asyncGetStudents = () => Students.findAll()

// студент по id
const asyncGetStudentById = (id) => Students.findByPk(id).then(student => {
    if (student === null) {
        throw new Error('student not found')
    } else {
        return student
    }
})


// студент по id пользователя
const asyncGetStudentByUserId = (id) => Students.findOne({where: {user_id: id}}).then(student => {
    if (student === null) {
        throw new Error('student not found')
    } else {
        return student
    }
})

// студент по камнате в общежитии
const asyncGetStudentsByRoomInHostelId = (id) => Students.findOne({where: {room_in_hostel_id: id}}).then(student => {
    if (student === null) {
        throw new Error('student not found')
    } else {
        return student
    }
})

// студент по ФИО
const asyncGetStudentByFullName = (name, surname, patronymic) => Students.findOne({
    where: {
        name,
        surname,
        patronymic
    }
}).then(student => {
    if (student === null) {
        throw new Error(`student ${surname} ${name} ${patronymic} not found`)
    } else {
        return student
    }
})


// добавление студента
const asyncAddStudent = (room_in_hostel_id, user_id, name, surname, patronymic) => Students.create({
    room_in_hostel_id, user_id, name, surname, patronymic
})

const asyncUpdateStudent = (id, upData) => asyncGetStudentById(id)
    .then(() => Students.update(upData, {where: {student_id: id}})
        .then(() => asyncGetStudentById(id)))


// удаление студента
const asyncDeleteStudent = (id) => Students.destroy({where: {student_id: id}})

module.exports = {
    asyncGetStudents,
    asyncGetStudentById,
    asyncGetStudentByUserId,
    asyncGetStudentsByRoomInHostelId,
    asyncGetStudentByFullName,
    asyncAddStudent,
    asyncDeleteStudent,
    asyncUpdateStudent
}