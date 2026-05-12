const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config()

const app = express();

// Middlewares de seguridad
app.use(helmet());
app.use(cors());

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = process.env.MONGODB_URI;
const option = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(uri, option)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))


// import routes
const authRoutes = require('./routes/auth')
const dashboardRoutes = require('./routes/dashboard');
const verifyToken = require('./routes/validate-token');

app.use('/api/dashboard', verifyToken, dashboardRoutes);


// route middlewares
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// Middleware para manejar errores 404
app.use((req, res, next) => {
    res.status(404).json({
        error: true,
        mensaje: 'Ruta no encontrada'
    });
});

// Middleware de manejo de errores global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: true,
        mensaje: 'Ocurrió un error interno en el servidor'
    });
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})
