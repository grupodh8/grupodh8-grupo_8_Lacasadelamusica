const fs = require('fs');

const UserModel = {
    databaseJson: './data/user.json',

    parseDatabase: () => {
        return JSON.parse(fs.readFileSync(this.databaseJson, 'utf-8'));
    },

    createId: () => {
        let allUsersArray = this.AllUsersArray();
        let lastUser = allUsersArray.pop();
        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },
    
    allUsersArray: () => {
        return this.parseDatabase();
    },

    findUserById: (id) => {
        let allUsersArray = this.allUsersArray();
        let selectedUser = allUsersArray.find(user => user.id === id);
        return selectedUser;
    },

    findUserByField: (property, text) => {
        let allUsersArray = this.allUsersArray();
        let selectedUser = allUsersArray.find(user => user[property] === text);
        return selectedUser;
    },

    create: (userData) => {
        let allUsersArray = this.allUsersArray();
        let newUser = {
            id: this.createId(),
            ... userData
        }
        allUsersArray.push(newUser);
        fs.writeFileSync(this.databaseJson, JSON.stringify(allUsersArray, null, ' '));
        return newUser;
    },

    edit: (id) => {

    },

    delete: (id) => {
        let allUsersArray = this.allUsersArray();
        let newDatabase = allUsersArray.filter(user => user.id !== id);
        fs.writeFileSync(this.databaseJson, JSON.stringify(newDatabase, null, ' '));
        return true;
    }
}

module.exports = User;