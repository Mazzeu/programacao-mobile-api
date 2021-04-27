const Establishment = require('../model/Establishment')

class EstablishmentController{
  static async allEstablishment(req, res){
    try{
      const establishment = await Establishment.find({})
      return res.status(200).json(establishment)
    } catch(error){
      return res.status(400).json({ error: "Não foi possivel realizar tal busca"})
    }
  }
}

module.exports = EstablishmentController;