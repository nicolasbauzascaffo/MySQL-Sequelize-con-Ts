const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("bkrhe84ws8deec038i8f", "ugpelzgcucgeel6y", "Co9sU8MHclLai3tNCjg3", {
  host: "bkrhe84ws8deec038i8f-mysql.services.clever-cloud.com",
  dialect: "mysql",
});

const conect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

conect();
