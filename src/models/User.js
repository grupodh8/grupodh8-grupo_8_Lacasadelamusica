const fs = require('fs');
const path = require('path');

let usersFilePath = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let User = {    
    allUsers: function () {
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        return users
    },

    create: function (userData, file) {
        let all = this.allUsers();
        let allUsers = this.allUsers();
        let lastUser = allUsers.pop();
        let newUser = {
            id: lastUser.id + 1,
            ... userData,
        }
        all.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(all, null, ' '));
        return newUser;
    },

    createId: function () {
        let allUsersSet = this.allUsers();
        let lastUser = allUsersSet.pop();
        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    findUserById: (id) => {
        let allUsers = this.allUsers();
        let selectedUser = allUsers.find(user => user.id === id);
        return selectedUser;
    },

    findUserByField: (property, text) => {
        let selectedUser = users.find(user => user[property] === text);
        return selectedUser;
    },   

    delete: (id) => {
        let allUsers = this.allUsers();
        let newDatabase = allUsers.filter(user => user.id !== id);
        fs.writeFileSync(this.databaseJson, JSON.stringify(newDatabase, null, ' '));
        return true;
    }
}

module.exports = User;