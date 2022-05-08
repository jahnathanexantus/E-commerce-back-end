require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
// router.post('/',async (req, res) => {
//   // create a new tag
//   try {
//     const createData = await Tag.create(req.body);
//     res.status(200).json(createData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });