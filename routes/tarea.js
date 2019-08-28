var express = require('express')
var router = express.Router()
var db = require('../connect/db')

router.get('/', function(req, res, next) {
  let con = db()
  con.query('SELECT * from tarea', function (error, results, fields) {
    if (error) throw error
    res.status(200).json(results)
  })
})

router.post('/', function(req, res, next) {
  let body = req.body
  console.log(body)
  let con = db()
  con.query(`INSERT INTO tarea VALUES(null,'${body.desc}',${body.importancia})`, function (error, results, fields) {
    if (error) throw error
    res.status(201).json({msj: 'se creo correctamente'})
  })
})

router.put('/', function(req, res, next) {
  let body = req.body
  console.log(body)
  let con = db()
  con.query(`UPDATE tarea SET descripcion='${body.desc}', importancia=${body.importancia} WHERE idTarea=${body.idTarea}`, function (error, results, fields) {
    if (error) throw error
    res.status(200).json({msj: 'se actualizo correctamente'})
  })
})

router.delete('/', function(req, res, next) {
  let body = req.body
  console.log(body)
  let con = db()
  con.query(`DELETE FROM tarea where idTarea=${body.idTarea}`, function (error, results, fields) {
    if (error) throw error
    res.status(200).json({msj: 'se borro correctamente'})
  })
})

module.exports = router