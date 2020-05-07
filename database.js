// Defining functions that help us query the database

// Libraries
const knex = require('knex')
const connectionSettings = require('./knexfile');

// Creating database connection
const database = knex(connectionSettings);


async function getAllSongs() {
  return await database
    .table('songs')
    .select();
}


async function getSongById(id) {
  return await database
    .table('songs')
    .first()
    .where({ id });
}


// Exports
module.exports = {
  getAllSongs,
  getSongById,
}

