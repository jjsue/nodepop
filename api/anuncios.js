var express = require('express');
var router = express.Router();
const Ad = require('./../models/anuncio');

//Petición GET:
router.get('/', async (req, res, next) => {
    try{
        //El filtro debe ser un objeto
        const filtro = {};
        //filtro.name = 'Rueda';
        //filtro.sell = undefined;
        //filtro.price = undefined;
        //filtro.image =  undefined; 
        //filtro.tags = undefined;
        //filtro listo, vamos con lo demas.
        console.log(filtro)
        const sort = 'name';
        const skip = 0;
        const limit = 1000;
        const fields = 'name sell price image tags';
        //Hago la primera query para que me lo traiga todo.
        const response = await Ad.lista(filtro, sort, skip, limit, fields);
        console.log(req.query.name);
        const docs = response;
        res.json(docs);
    }
    catch(err){
        next(err);
    }
});

module.exports = router;
