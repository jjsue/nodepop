'use strict';

const conn = require('./lib/connectMongoose');
const Agente = require('./models/anuncio.js');

conn.once('open', async () => {
  try {

    await initAgentes();
    conn.close();

  } catch(err) {
    console.error('Hubo un error:', err);
    process.exit(1);
  }
});

async function initAgentes() {
  await Agente.deleteMany();
  await Agente.insertMany([
    { name: 'Botas de futbol', sell: true, price: 10, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['lifestyle','work']},
    { name: 'Patinete electrico', sell: false, price: 100, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['motor']},
    { name: 'Telefono fijo', sell: true, price: 104, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['work']},
    { name: 'Rueda de coche', sell: true, price: 299, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['lifestyle']},
  ]);
}