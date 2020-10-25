// const mysql = require('mysql2')

// const pool = mysql.createPool({
//   host: process.env.DR4C0_HOST,
//   user: process.env.DR4C0_USER,
//   password: process.env.DR4C0_PW,
//   database: process.env.DR4C0_DB,
//   multipleStatements: true //MUST HAVE to make more than 1 sql statement in a single query
// })

// module.exports = pool.promise()

var host = process.env.DR4C0_HOST
var user = process.env.DR4C0_USER
var password = process.env.DR4C0_PW
var database = process.env.DR4C0_DB
var port = process.env.DR4C0_PORT

const Sequelize = require('sequelize')
const sequelize = new Sequelize(database, user, password, {
  dialect: 'mysql',
  host: host,
  port: port
})

module.exports = sequelize