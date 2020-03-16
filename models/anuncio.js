'use strict';

const mongoose = require('mongoose');

//Creamos el esquema

const adSchema = mongoose.Schema({
    name: String,
    sell: Boolean,
    price: Number,
    image: String,
    tags: [String],
    message: mongoose.Schema.Types.Mixed, // para datos sin schema //Esto hay que revisarlo.
});

adSchema.statics.lista = function (filter, sort, skip, limit, fields) {
    var query = Ad.find(filter); //Explicacion: https://mongoosejs.com/docs/api.html#model_Model.find
    query.sort(sort); //Ordenar resultados por....
    query.skip(skip); // Saltarse x resultados
    query.limit(limit); //Limite
    query.select(fields); //Campos devueltos
    return query.exec();
}


//Se crea el modelo con el esquema.
const Ad = mongoose.model('ad', adSchema);

//Exportado del modelo:
module.exports = Ad;