const Sequelize = require('sequelize')

const sequelize = require('../util_t0d/db_dr4c0')

const Entry = sequelize.define('entry', {
  p_k: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  topic: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  blurb: {
    type: Sequelize.STRING(3333),
    allowNull: true
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  keywords: {
    type: Sequelize.STRING,
    allowNull: true
  },
  date_happened: {
    type: Sequelize.DATE,
    allowNull: true
  },
  cross_refs: {
    type: Sequelize.STRING,
    allowNull: true
  },
  attachments: {
    type: Sequelize.STRING,
    allowNull: true
  },
  note: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = Entry