'use strict'
var express = require('express');
var router = express.Router();
const adCall = require('./../api/calls/internalCall'); //Llamada para los anuncios


router.get('/', async function (req, res, next) {
  try {
    const dbData = await adCall();
    if (dbData[0] === 'error'){
      throw(dbData[1]); //Controlando error y dando info sobre el
    }
    console.log(dbData);
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
