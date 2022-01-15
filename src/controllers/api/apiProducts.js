let db = require("../../database/models");

const apiProducts = {
  list: async (req, res) => {
    try {
      let productsList = [];
      let categoryList = {};
      const allProducts = await db.Product.findAll({
        include: [{ association: 'categories' }]
      });
      const allCategory = await db.Category.findAll({
        include: [{ association: 'products' }]
      })

      allProducts.forEach((product) => {
        const list = {
          id: product.id,
          name: product.name,
          description: product.description,
          category: product.categories.name,
          detail: `/api/products/${product.id}`,
          image: `http://localhost:3001/images/products/${product.image}`
        };
        return productsList.push(list);
      });

      allCategory.forEach((category) => {
        Object.defineProperty(categoryList, category.name, {
          value: category.products.length,
          writable: true,
          enumerable: true,
          configurable: true
        })
      });

      res.status(200).json({
        count: allProducts.length,
        countByCategory: categoryList,
        data: productsList,
        detail: "/api/products",
      });
    } catch (error) {
      res.status(500).json({
        count: null,
        countByCategory: null,
        data: null,
        detail: null,
      });
    }
  },

  findOne: async (req, res) => {
    try {
      let idToFind = req.params.id
      let product = await db.Product.findOne({ where: { id: idToFind } , 
        include: [{ association: 'categories' }, { association: 'brands' }]
      })

      let prodFinal = {}
      
      Object.defineProperties(prodFinal, {
        id: {
          value: product.id,
          writable: true,
          enumerable: true,
          configurable: true
        },
        name: {
          value: product.name,
          writable: true,
          enumerable: true,
          configurable: true
        },
        sku: {
          value: product.sku,
          writable: true,
          enumerable: true,
          configurable: true
        },
        stock: {
          value: product.stock,
          writable: true,
          enumerable: true,
          configurable: true
        },
        description: {
          value: product.description,
          writable: true,
          enumerable: true,
          configurable: true
        },
        category: {
          value: product.categories.name,
          writable: true,
          enumerable: true,
          configurable: true
        },
        classification: {
          value: product.classification,
          writable: true,
          enumerable: true,
          configurable: true
        },
        type: {
          value: product.type,
          writable: true,
          enumerable: true,
          configurable: true
        },
        price: {
          value: product.price,
          writable: true,
          enumerable: true,
          configurable: true
        },
        image: {
          value: product.image,
          writable: true,
          enumerable: true,
          configurable: true
        },
        brand: {
          value: product.brands.name,
          writable: true,
          enumerable: true,
          configurable: true
        }
        })

  res.status(200).json({
    data: prodFinal,
    detail: `/api/products/${product.id}`,
  });
} catch (error) {
  res.status(500).json({
    data: null,
    detail: null
  });
}
    },
  };

module.exports = apiProducts