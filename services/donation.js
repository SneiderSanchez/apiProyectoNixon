const MysqlLib = require("../lib/database");

class DonationService {
  constructor() {
    this.mysqlClass = new MysqlLib();
  }
  async saveDonation(objeto,descripcion,donante,estado,direccion,ciudad,disponible,image) {
    const connection = await this.mysqlClass.connection();
    const data = await this.mysqlClass.doQuery(
      connection,
      `insert into donacion(objeto,descripcion,donante,estado,direccion,ciudad,disponible,image) values ('${objeto}','${descripcion}','${donante}','${estado}','${direccion}','${ciudad}','${disponible}','${image}')`
    );
    return data ;
  }
  async getDonations() {
    const connection = await this.mysqlClass.connection();
    const data = await this.mysqlClass.doQuery(
      connection,
      `select * from donacion where disponible=1`
    );
    return data;
  }
  async updateDonacion(id) {
    const connection = await this.mysqlClass.connection();
    const data = await this.mysqlClass.doQuery(
      connection,
      `update donacion set disponible=0 where idDonacion=${id}`
    );
    return data;
  }
}

module.exports = DonationService;
