const mysql = require("mysql2/promise");
const { dbUser, dbPassword, dbHost, dbName } = require("../config");
class MysqlDB {
  async connection() {
    const USER = encodeURIComponent(dbUser);
    const PASSWORD = encodeURIComponent(dbPassword);
    const HOST = encodeURIComponent(dbHost);
    const NAME = encodeURIComponent(dbName);
    try {
      const connection = await mysql.createPool({
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
        //acquireTimeout: 10000
      });
      return connection;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  async doQuery(connection, query) {
    try {
      const [rows, fields] = await connection.query(`${query}`);
      connection.end();
      return rows;
    } catch (e) {
      console.log(e);
      connection.end();
      return false;
    }
  }
  async doMultipleQuery(connection, query) {
    try {
      const [rows, fields] = await connection.query(`${query}`);
      return rows;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
module.exports = MysqlDB;
