'use strict';

const conn = require('./lib/connectMongoose');
const anuncio = require('./models/anuncio.js');
const tagDb = require('./models/tag.js');

conn.once('open', async () => {
  try {
    await initAdDb();
    await initTagDb();
    conn.close();

  } catch (err) {
    console.error('Hubo un error:', err);
    process.exit(1);
  }
});

async function initAdDb() {
  await anuncio.deleteMany();
  await anuncio.insertMany([
    { name: 'Botas de futbol', sell: true, price: 10, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['lifestyle', 'work'] },
    { name: 'Patinete electrico', sell: false, price: 100, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['motor'] },
    { name: 'Telefono fijo', sell: true, price: 104, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['work'] },
    { name: 'Rueda de coche', sell: true, price: 299, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['lifestyle'] },
    { name: 'Telefono', sell: true, price: 299, image: 'http://www.clker.com/cliparts/4/4/4/T/k/W/no-camera-allowed-hi.png', tags: ['lifestyle'] },
  ]);
}

async function initTagDb() {
  await tagDb.deleteMany();
  await tagDb.insertMany([
    { tag: 'lifestyle' },
    { tag: 'work' },
    { tag: 'motor' },
    { tag: 'mobile' },
  ]);
}