module.exports = (sequelize, DataTypes) => {
    let alias = "brands";
    let cols = {
        brand_id: {
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
    