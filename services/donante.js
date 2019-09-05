const MysqlLib = require("../lib/database");

class DonanteService {
  constructor() {
    this.mysqlClass = new MysqlLib();
  }
  async saveDonante(nombre,email,contraseña,nombreContacto,telefono,descripcion,direccion,ciudad) {
    const connection = await this.mysqlClass.connection();
    const data = await this.mysqlClass.doQuery(
      connection,
      `insert into donante(nombre,email,contraseña,nombreContacto,telefono,descripcion,direccion,ciudad) values ('${nombre}','${email}','${contraseña}','${nombreContacto}','${telefono}','${descripcion}','${direccion}','${ciudad}')`
    );
    return data ;
  }
  async getDonantes() {
    const connection = await this.mysqlClass.connection();
    const data = await this.mysqlClass.doQuery(
      connection,
      `select * from donante`
    );
    return data;
  }
}

module.exports = DonanteService;
