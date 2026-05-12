const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// VALIDACIONES
const { schemaRegister, schemaLogin } = require('../validations/auth');




router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

    // CREATE TOKENS
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })

})

// REGISTER USERS
router.post('/register', async (req, res) => {

    // VALIDACIONES DE USUARIOS

    const { error } = schemaRegister.validate(req.body)
    if (error) {
        return res.status(400).json(
            { error: error.details[0].message }
        )
    }

    // VALIDACION EMAIL UNICO

    const esxisteElEmail = await User.findOne({ email: req.body.email });
    if (esxisteElEmail) {
        return res.status(400).json(
            { error: true, mesaje: 'Email ya Existe intenta con otro' }
        )
    }

    // PASSWORD ENCRITADA
    const saltos = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, saltos);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    });
    try {
        const userDB = await user.save();
        res.json({
            error: null,
            data: userDB
        })
    } catch (error) {
        res.status(400).json({ error })
    }
})

module.exports = router;