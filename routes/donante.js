const express = require("express");
const router = express.Router();
const Donante = require("../services/donante");



router.get("/", (req, res, next) => {
  res.send("holaaaaa bienvenido a los servicios de donantes");
});
router.get("/allDonantes", async (req, res, next) => {
    const donante = new Donante();
    try {
        const allDonantes = await donante.getDonantes();
        res.status(200).json({
          data: allDonantes,
          message: "Donantes listed ",
          error: false
        });
      } catch (err) {
        next(err);
      }
});

router.post("/add", async (req, res, next) => {
  const donante = new Donante();
  const {nombre} = req.body
  const {email} = req.body
  const {contraseña} = req.body
  const {nombreContacto} = req.body
  const {telefono} = req.body
  const {descripcion} = req.body
  const {direccion} = req.body
  const {ciudad} = req.body
  const newDonante = await donante.saveDonante(nombre,email,contraseña,nombreContacto,telefono,descripcion,direccion,ciudad);
  if(newDonante){
      res.status(200).json({
        message: "New donante Added successfully ",
        error: false
      });
  }else{
    res.status(200).json({
        message: "Error adding donante",
        error: true
      });
  }
});

module.exports = router;
