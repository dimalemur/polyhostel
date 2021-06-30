const {Hostel} = require('../models/init-models')

const asyncGetHostels = () => Hostel.findAll()

// id общежития по номеру
const asyncGetHostelByName = (name) => Hostel.findOne({attributes: ['hostel_id'], where: {name}})

// общежитие по id
const asyncGetHostelById = (id) => Hostel.findByPk(id).then(hostel => {
    if (hostel === null) {
        throw new Error('hostel not found')
    } else {
        return hostel
    }
})

// добавление общежития
const asyncAddHostel = (name, type) => Hostel.create({name, type})

// удаление общежития
const asyncDeleteHostel = (id) => Hostel.destroy({where: {hostel_id: id}})

// изменение общежиьия
const asyncUpdateHostel = (id, upData) => asyncGetHostelById(id)
    .then(() => Hostel.update(upData, {where: {hostel_id: id}})
        .then(() => asyncGetHostelById(id)))

module.exports = {
    asyncGetHostels,
    asyncGetHostelById,
    asyncAddHostel,
    asyncDeleteHostel,
    asyncGetHostelByName,
    asyncUpdateHostel
}