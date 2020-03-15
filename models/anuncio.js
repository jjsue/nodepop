'use strict';

const mongoose = require('mongoose');

//Creamos el esquema

const adSchema = mongoose.Schema({
    name: String,
    sell: Boolean,
    price: Number,
    image: String,
    tags: [String],
});

adSchema.statics.lista = function(filtro, limit, skip, sort, fields) {
    const query = Agente.find(filtro);
    query.limit(limit);
    query.skip(skip);
    query.sort(sort);
    query.select(fields);
    return query.exec();
};

//Se crea el modelo con el esquema.
const ad = mongoose.model('ad', adSchema);

//Exportado del modelo:
module.exports = ad;