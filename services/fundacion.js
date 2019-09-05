const MysqlLib = require("../lib/database");

class FundacionService {
  constructor() {
    this.mysqlClass = new MysqlLib();
  }
  async saveFundacion(nombre,email,contraseña,nombreContacto,telefono,descripcion,direccion,ciudad) {
    const connection = await this.mysqlClass.connection();
    const data = await this.mysqlClass.doQuery(
      connection,
      `insert into fundacion(nombre,email,contraseña,nombreContacto,telefono,descripcion,direccion,ciudad) values ('${nombre}','${email}','${contraseña}','${nombreContacto}','${telefono}','${descripcion}','${direccion}','${ciudad}')`
    );
    return data ;
  }
  async getFundacion() {
    const connection = await this.mysqlClass.connection();
    const data = await this.mysqlClass.doQuery(
      connection,
      `select * from fundacion`
    );
    return data;
  }
}

module.exports = FundacionService;
