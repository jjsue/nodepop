var express = require('express');
var router = express.Router();

const adModel = require('./../models/anuncio');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    try{
        //Aqui podríamos poner logica de filtros.
        const docs = await adModel.lista();
        console.log(docs);
        res.json(docs);
    }
    catch(err){
        next(err);
    }
});

module.exports = router;
