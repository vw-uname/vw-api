var mysql      = require('mysql');
module.exports = () => {
  return mysql.createConnection({
    host     : 'localhost',
    user     : 'api',
    password : '123',
    database : 'visibilidad'
  });
}

