const router = require('express').Router();

router.get('/users/signin', (req, res)=>{
    res.send('Ingresando a la Aplicación');
});

router.get('/users/signup', (req,res)=>{
    res.send('Formulario de registro');
});

module.exports = router;