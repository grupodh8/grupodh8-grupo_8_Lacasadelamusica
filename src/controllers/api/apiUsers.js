let db = require("../../database/models");
    
const apiUsers = {  
    list: async (req, res) => {
        try {
          let usersList = [];
          const users = await db.User.findAll();
          users.forEach((user) => {
            let list = {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
              detail: `/api/users/${user.id}`
            };
            return usersList.push(list);
          });
    
          res.status(200).json({
            count: users.length,
            users: usersList,
            apiUrl: "/api/users",
          });
        } catch (error) {
          res
            .status(500)
            .json({
              count: null,
              users: null,
              apiUrl: "/api/users",
            });
        }
      },
      findOne: async (req, res) => {
        try {
          const user = await db.User.findByPk(req.params.id);
    
          res.status(200).json({
            user: {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              address: user.address,
              city: user.city,
              zip: user.zip,
              email: user.email,
              avatar: {
                url: `http://localhost:3000/images/users/${user.avatar}`
              },
            },
            apiUrl: `/api/users/${user.id}`,
          });
        } catch (error) {
          res
            .status(500)
            .json({ 
                user: null, 
                apiUrl: null
            });
        }
      }
}

module.exports = apiUsers