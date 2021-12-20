module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        category_id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING,
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