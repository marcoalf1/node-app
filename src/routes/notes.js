const router = require('express').Router();

router.get('/notes', (req, res)=>{
    res.send('Notes desde la base de datos');
});

module.exports = router;