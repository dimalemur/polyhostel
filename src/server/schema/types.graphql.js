const graphql = require('graphql')
const {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt} = graphql;


const roomFields = {
    room_id: {type: GraphQLID},
    name: {type: GraphQLString},
}

const RoomType = new GraphQLObjectType({
    name: 'Room',
    fields: () => (roomFields),
});


const RoomInHostelType = new GraphQLObjectType({
    name: 'RoomInHostel',
    fields: () => ({
        room_in_hostel_id: {type: GraphQLID},
        room: {type: RoomType},
        hostel: {type: HostelType},
    }),
});


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        user_id: {type: GraphQLID},
        login: {type: GraphQLString},
        password: {type: GraphQLString},
    }),
});

const studentFields = {
    user_id: {type: GraphQLID},
    student_id: {type: GraphQLInt},
    room_in_hostel: {type: RoomInHostelType},
    name: {type: GraphQLString},
    surname: {type: GraphQLString},
    patronymic: {type: GraphQLString},
}

const StudentType = new GraphQLObjectType({
    name: 'Student',
    fields: () => (studentFields),
});

const hostelFields = {
    hostel_id: {type: GraphQLID},
    name: {type: GraphQLString},
    type: {type: GraphQLString},
}

const HostelType = new GraphQLObjectType({
    name: 'Hostel',
    fields: () => (hostelFields),
});

module.exports = {
    UserType,
    StudentType,
    HostelType,
    RoomType,
    RoomInHostelType
}