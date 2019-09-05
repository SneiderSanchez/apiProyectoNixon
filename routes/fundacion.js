const express = require("express");
const router = express.Router();
const Fundacion = require("../services/fundacion");



router.get("/", (req, res, next) => {
  res.send("holaaaaa bienvenido a los servicios de fundaciones");
});
router.get("/allDonantes", async (req, res, next) => {
    const fundacion = new Fundacion();
    try {
        const allFundaciones = await fundacion.getFundacion();
        res.status(200).json({
          data: allFundaciones,
          message: "Fundacion listed ",
          error: false
        });
      } catch (err) {
        next(err);
      }
});

router.post("/add", async (req, res, next) => {
  const fundacion = new Fundacion();
  const {nombre} = req.body
  const {email} = req.body
  const {contraseña} = req.body
  const {nombreContacto} = req.body
  const {telefono} = req.body
  const {descripcion} = req.body
  const {direccion} = req.body
  const {ciudad} = req.body
  const newFundacion = await fundacion.saveFundacion(nombre,email,contraseña,nombreContacto,telefono,descripcion,direccion,ciudad);
  if(newFundacion){
      res.status(200).json({
        message: "New fundacion Added successfully ",
        error: false
      });
  }else{
    res.status(200).json({
        message: "Error adding fundacion",
        error: true
      });
  }
});

module.exports = router;
