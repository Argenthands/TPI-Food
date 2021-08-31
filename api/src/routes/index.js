//const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require('express');
const recipesRoute = require('./Recipes');
const dietsRoute = require('./Types');


//const router = Router();
const router = express.Router();
router.use('/recipe',recipesRoute);
router.use('/types', dietsRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
