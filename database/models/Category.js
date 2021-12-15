module.exports = (sequelize, DataTypes) => {
    let alias = "categories";
    let cols = {
        category_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        }
    };

    let config = {
        tableName: "categories",
        timestamps: false,
      };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
    });
    };


    return Category
};