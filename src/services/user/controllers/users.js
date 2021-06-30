const {
    asyncGetUsers,
    asyncGetUserById,
    asyncAddUser,
    asyncDeleteUser,
    asyncGetUserByLP,
    asyncUpdateUser
} = require('../services/users')
const ERROR_STATUS = 400;

const getAllUsers = async (req, res) => {
    try {
        const users = await asyncGetUsers();
        return res.json(users)
    } catch (e) {
        return res.status(ERROR_STATUS).send(String(e))
    }
}

const getUser = async (req, res) => {
    try {
        const {userid} = req.query;
        const user = await asyncGetUserById(userid);
        return res.json(user)
    } catch (e) {
        return res.status(ERROR_STATUS).send(String(e))
    }
}

const addUser = async (req, res) => {
    try {
        const {login, password} = req.body;
        const user = await asyncAddUser(login, password);
        return res.json(user)
    } catch (e) {
        return res.status(ERROR_STATUS).send(String(e))
    }

}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.body;
        const status = await asyncDeleteUser(id);
        return status ? res.send('success') : res.status(404).send('user not found')
    } catch (e) {
        return res.status(ERROR_STATUS).send(String(e))
    }
}

const getUserByLP = async (req, res) => {
    try {
        const {login, password} = req.body;
        const user = await asyncGetUserByLP(login, password);
        return user ? res.json(user.user_id) : res.status(401).send('invalid login or password')
    } catch (e) {
        return res.status(ERROR_STATUS).send(String(e))
    }
}

const updateUser = async (req, res) => {
    try {
        const {id, updata} = req.body;
        const user = await asyncUpdateUser(id, updata);
        return res.json(user)
    } catch (e) {
        return res.status(ERROR_STATUS).send(String(e))
    }
}


module.exports = {
    getAllUsers,
    getUser,
    addUser,
    deleteUser,
    getUserByLP,
    updateUser
}