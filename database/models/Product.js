module.exports = (sequelize, DataTypes) => {
    let alias = "products";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        sku: {
            allowNull: false,
            type: DataTypes.BIGINT,
            unique: true
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        classification: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: "products",
        timestamps: false,
      };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
          as: "categories",
          foreignKey: "category_id"
        });
    
        Product.belongsTo(models.Brand, {
          as: "brands",
          foreignKey: "brand_id",
        });
    
      };



    return Product
};
    