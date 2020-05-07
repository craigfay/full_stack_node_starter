module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './database.sqlite3'
  },
  migrations: {
    directory: './migrations',
  },
  useNullAsDefault: true,
};
