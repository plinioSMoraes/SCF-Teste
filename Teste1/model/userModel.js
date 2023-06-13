const data = require('../database/fakeData');
const accessedData = require("../database/accessedData");

const getUser = (name) => {
    let user = data.find( user => user.name === name );

    if (accessedData[user.id] === undefined) {
        accessedData[user.id] = 0;
    }
    accessedData[user.id] += 1;
    
    return user;
}

const getUsers = () => {
    return data;
}

const addUser = (newUser) => {
    data.push(newUser);
    return newUser;
}

const deleteUser = (name) => {
    const index = data.findIndex( user => user.name === name );
    if (index === -1) {
        return undefined;
    }
    const deletedUser = data.splice(index, 1);
    return deletedUser;
}

const updateUser = (id, newUser) => {
    const index = id - 1;
    const updatedUser = data.splice(index, 1, newUser);
    return updatedUser;
}

const getUserAccess = (name) => {
    const user = data.find( user => user.name === name );
    console.log(user);
    const { id } = user;
    if (id === undefined || id === "") {
        return undefined;
    }

    return accessedData[user.id];
}

module.exports = {
    getUser,
    getUsers,
    addUser,
    deleteUser,
    updateUser,
    getUserAccess,
}