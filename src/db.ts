import { Sequelize } from "sequelize";
import User from "./models/user";

const sequelize = new Sequelize("mydatabase", "myuser", "mypassword", {
  host: "localhost",
  dialect: "postgres",
});

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

syncDatabase();

export default sequelize;
