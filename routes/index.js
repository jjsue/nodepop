'use strict'
var express = require('express');
var router = express.Router();
const adCall = require('./../api/calls/internalCall'); //Llamada para los anuncios


router.get('/', async function (req, res, next) {
  try {
    //Hay que quitar la / de la req.url, es lo que voy a hacer con el siguiente bucle.
    let queryparams = '';
    for (let i = 1; i < req.url.length; i++){
      queryparams += req.url[i];
    }
    console.log(queryparams);
    const dbData = await adCall(queryparams);
    if (dbData[0] === 'error'){
      throw(dbData[1]); //Controlando error y dando info sobre el
    }
    res.render('index', {
      title: 'Muestra de nodepop',
      data: dbData,
    });
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
