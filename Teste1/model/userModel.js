let data = require('../database/fakeData');

const getUser = (email) => {
    let user = data.find( user => user.email === email );
    return user;
}

const getUsers = () => {
    return data;
}

module.exports = {
    getUser,
    getUsers
}