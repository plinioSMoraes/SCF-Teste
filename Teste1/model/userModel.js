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

const deleteUser = (email) => {
    const index = data.findIndex( user => user.email === email );
    if (index === -1) {
        return undefined;
    }
    const deletedUser = data.splice(index, 1);
    return deletedUser;
}

module.exports = {
    getUser,
    getUsers,
    addUser,
    deleteUser,
}