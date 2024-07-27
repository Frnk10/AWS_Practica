//Importar librerias - instancias
const express = require('express');
const knex = require('./db'); // Llamado a configuracion de db
const routes = require('./routes'); // Llamado a rutas
const cors = require('cors'); // Importar paquete cors

const app = express(); // Creamos una nueva instancia
const port = 3000; // Puerto de salida

app.use(express.json()); // Configurar tipo de dato json
app.use(cors()); // Usar 'cors' para manejar CORS
app.use('/api',routes); // Configurar la url base y rutas
app.use(express.static('public'));
app.listen(port, () => { // Ejecutar la API por el puerto 3000
    console.log(`Servidor corriendo en el puerto ${port}`)
})
