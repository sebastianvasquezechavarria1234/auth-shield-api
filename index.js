const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = `mongodb+srv://api-directo:sebas@cluster1.u9v1tw1.mongodb.net/api-directo?retryWrites=true&w=majority&appName=Cluster1`;
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