const mongoose = require('mongoose');
const database = require('./db.config');

mongoose.Promise = global.Promise;

mongoose.connect(database.local.localUrlDatabse, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Banco de Dados conectado!');
}, (err) => {
  console.log(`Erro na conexão com o Banco de Dados...: ${err}`);
  process.exit();
});
