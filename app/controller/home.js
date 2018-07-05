'use strict';
const Controller = require('egg').Controller;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('handout', 'postgres', 'root', {
  host: '192.168.0.8',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});


class HomeController extends Controller {
  async index() {
    await this.ctx.render('home');
  }
  async post() {
    /* const User = sequelize.define('info', {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        defaultValue: '无名氏'
      },
      sex: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      classid: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    });
    const Classinfo = sequelize.define('classinfo', {
      name: { type: Sequelize.STRING },
      number: { type: Sequelize.INTEGER, defaultValue: 0 },
      teacherid: { type: Sequelize.INTEGER, defaultValue: 0 }
    });
    const Teache = sequelize.define('teacheinfo', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    })
    User.sync({force: false}).then(() => {
      // 表已创建
       User.create({
        firstName: 'John',
        lastName: 'Hancock'
      }).then(user=>{
        console.log(user)
      })
     }); */

    return this.ctx.body = {
      name: this.ctx.request.body.name
    };
  }
}

module.exports = HomeController;
