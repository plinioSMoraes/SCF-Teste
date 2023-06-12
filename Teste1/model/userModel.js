let data = require('../database/fakeData');

const getUser = (email) => {
    let user = data.find( user => user.email === email );
    return user;
}

const getUsers = () => {
    return data;
}

const addUser = (newUser) => {
    data.push(newUser);
    return newUser;
}

module.exports = {
    getUser,
    getUsers,
    addUser,
}