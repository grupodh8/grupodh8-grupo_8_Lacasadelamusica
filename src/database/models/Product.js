module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING,
            unique: true
        },
        sku: {
            allowNull: false,
            type: dataTypes.BIGINT,
            unique: true
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        classification: {
            type: dataTypes.STRING,
            allowNull: false
        },
        type: {
            type: dataTypes.STRING,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        brand_id: {
            type: dataTypes.INTEGER,
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
    