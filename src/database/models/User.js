module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING
        },
        address: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        },
        zip: {
            type: dataTypes.INTEGER
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING,
            unique: true
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: "users",
        timestamps: false,
      };

    const User = sequelize.define(alias, cols, config);


    return User
};
    