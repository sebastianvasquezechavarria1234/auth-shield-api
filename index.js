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
const authRoutes = require('./routes/auth.js')
const dashboadRoutes = require('./routes/dashboard');
const verifyToken = require('./routes/validate-token');

app.use('/api/dashboard', verifyToken, dashboadRoutes);

// route middlewares
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})