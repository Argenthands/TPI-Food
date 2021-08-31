const express = require('express');
const { Diet } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res){
    try{
        await Diet.findAll({})
        .then(answer =>{
            return res.json(answer)
        })
    }
    catch(error){
        error =>{
            console.log('error en Types', error)
        }
    }
})

module.exports = router;
