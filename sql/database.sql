CREATE DATABASE visibilidad;

use visibilidad;

CREATE TABLE IF NOT EXISTS tarea(
  idTarea INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  descripcion varchar(80),
  importancia INTEGER
);