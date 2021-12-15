module.exports = (sequelize, DataTypes) => {
    let alias = "users";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        first_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        last_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        city: {
            type: DataTypes.STRING
        },
        zip: {
            type: DataTypes.INTEGER
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        avatar: {
            type: DataTypes.STRING
        }
    };

    let config = {
        tableName: "users",
        timestamps: false,
      };

    const User = sequelize.define(alias, cols, config);


    return User
};
    