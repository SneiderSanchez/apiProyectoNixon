const express = require("express");
const router = express.Router();
const Donation = require("../services/donation");

router.get("/", (req, res, next) => {
  res.send("holaaaaa bienvenido a los servicios de donaciones");
});
router.get("/allDonations", async (req, res, next) => {
    const donation = new Donation();
    try {
        const allDonations = await donation.getDonations();
        res.status(200).json({
          data: allDonations,
          message: "Donations listed ",
          error: false
        });
      } catch (err) {
        next(err);
      }
});

router.post("/add", async (req, res, next) => {
  console.log(req.body)
  const donation = new Donation();
  const {objeto} = req.body
  const {donante} = req.body
  const {estado} = req.body
  const disponible = 1
  const {descripcion} = req.body
  const {direccion} = req.body
  const {ciudad} = req.body
  const {image} = req.body
  const newDonation = await donation.saveDonation(objeto,descripcion,donante,estado,direccion,ciudad,disponible,image);
  if(newDonation){
      res.status(200).json({
        message: "New donation Added successfully ",
        error: false
      });
  }else{
    res.status(200).json({
        message: "Error adding donation",
        error: true
      });
  }
});
router.post("/changeState", async (req, res, next) => {
  console.log(req.body)
  const donation = new Donation();
  const {id} = req.body
  const newDonation = await donation.updateDonacion(id);
  if(newDonation){
      res.status(200).json({
        message: "donation updated successfully ",
        error: false
      });
  }else{
    res.status(200).json({
        message: "Error updating donation",
        error: true
      });
  }
});

module.exports = router;
