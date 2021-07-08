const graphql = require('graphql')
const axios = require('axios');
const {
    UserType,
    StudentType,
    HostelType,
    RoomType,
    RoomInHostelType,
} = require('./types.graphql')

const {
    GraphQLObjectType,
    GraphQLSchema, GraphQLID,
    GraphQLList,
    GraphQLInt,
    GraphQLString
} = graphql;

// запросы к серисам за данными
const userRequests = {
    getAllUsers: async () => (await axios.get('http://user:3008/allusers')).data,
    getUser: async (user_id) => (await axios.get(`http://user:3008/user?userid=${user_id}`)).data,

    getUserByLP: async (login, password) => (await axios.post(
        'http://user:3008/userbylp',
        {login, password},)).data,

    getAllStudents: async () => (await axios.get('http://user:3008/allstudents')).data,
    getStudentsByUser: async (user_id) => (await axios.get(
        `http://user:3008/studentbyuser?userid=${user_id}`)).data,
}

const hostelRequests = {
    getRoomInHostel: async (id) => (await axios.get(`http://hostel:3006/roominhostel?id=${id}`)).data,

}

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        allusers: {
            type: new GraphQLList(UserType),
            resolve() {
                return userRequests.getAllUsers();
            },
        },
        getStudentByLp: {
            type: StudentType,
            args: {login: {type: GraphQLString}, password: {type: GraphQLString}},
            async resolve(parent, args) {
                const user_id = await userRequests.getUserByLP(args.login, args.password);
                const student = await userRequests.getStudentsByUser(user_id);
                student.room_in_hostel = await hostelRequests.getRoomInHostel(student.room_in_hostel_id)
                return student;
            },
        }

    }
});

module.exports = new GraphQLSchema({
    query: Query,
});