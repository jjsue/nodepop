var express = require('express');
var router = express.Router();
const Ad = require('./../models/anuncio');

//Petición GET:
router.get('/', async (req, res, next) => {
    try {
        //El filtro debe ser un objeto
        const filtro = {};
        var sort = '_id';
        var skip = 0;
        var limit = 100;
        const fields = 'name sell price image tags';
        //Sin tocar de momento lo anterior voy a ir tomando los parametros y usandolos para filtrar.
        //Filtros puros
        if (req.query.name !== undefined) { //Filtro por nombre
            filtro.name = new RegExp(req.query.name, "gi"); //Esta es la RegExp que me permite que funciuonen las busquedas parciales. Busqueda global + mayus minus
            console.log(filtro);
        }
        if (req.query.sell !== undefined) { //Filtro para compra o venta
            filtro.sell = req.query.sell;
        }
        if (req.query.pricemax !== undefined || req.query.pricemin !== undefined) { //Precio maximo o minimo
            console.log("Pricemax o pricemin");
            if (req.query.pricemax !== undefined && req.query.pricemin) { //Ambos dos
                filtro.price = { $gte: parseInt(req.query.pricemin), $lte: parseInt(req.query.pricemax) }
                console.log(filtro);
            }
        }
        if (req.query.tag !== undefined) {
            filtro.tags = req.query.tag.split(','); //El .split separa por comas y guarda en Array. Si un anuncio tiene 2 tags no encuentra uno individual o desordenado tampoco.
            console.log(filtro.tags);
        }
        //Aqui vamos a meter el orderby:
        if (req.query.orderby !== undefined && (req.query.orderby === 'name' || req.query.orderby === 'price')) { //Controlamos que solo se puede ordenar por precio.
            console.log("Orderby");
            sort = req.query.orderby;
        }
        //skip y limit:
        if (req.query.skip !== undefined) {
            skip = parseInt(req.query.skip); //Falta la logica para controlar NaN
        }
        if (req.query.limit !== undefined) {
            limit = parseInt(req.query.limit);
        }
        // Respuesta:
        const response = await Ad.lista(filtro, sort, skip, limit, fields);
        const docs = response;
        res.json(docs);
    }
    catch (err) {
        next(err);
    }
});

//Siguiente middleware, el de crear anuncios.
router.post('/', async (req, res, next) => {
    try {
        const dataPost = req.body;
        res.status(201).json({dataPost});
    }
    catch{
        next(err);
    }
});

module.exports = router;
