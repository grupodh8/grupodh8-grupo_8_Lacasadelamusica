module.exports = (sequelize, dataTypes) => {
    let alias = "Brand";
    let cols = {
        brand_id: {
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
        tableName: "brands",
        timestamps: false,
      };

    const Brand = sequelize.define(alias, cols, config);

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brand_id'
    });
    };

    return Brand
};
    