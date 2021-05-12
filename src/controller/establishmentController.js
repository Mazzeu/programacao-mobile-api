const Establishment = require('../model/Establishment')

class EstablishmentController{
  // Method for search all Establishment on db
  static async allEstablishment(req, res){
    try{
      const establishment = await Establishment.find({})
      return res.status(200).json(establishment)
    } catch(error){
      return res.status(400).json({ error: "Não foi possivel realizar tal busca"})
    }
  }
  //Method for search an Establishment on db
  static async oneEstablishement(req, res){
    try{
      const establishment = await Establishment.find({ _id: req.params.id})
      return res.status(200).json(establishment)
    } catch(error){
      return res.status(400).json({ error: "Não foi possivel encontrar este estabelecimento"})
    }
  }
  // Method for create Establishment on db
  static async createEstablishment(req, res){
    try{
      const establishment = await Establishment.create(req.body);
      return res.status(200).json(establishment);
    } catch(error){
      return res.status(400).json({ error: "Não foi possivel criar o devido estabelecimento" });
    }
  }
}

module.exports = EstablishmentController;
