const router = require('express').Router();

router.get('/notes/add', (req,res) => {
    res.render('notes/new-note');
});

router.post('/notes/new-notes', (req, res) => {
    console.log(req.body);
    res.send('Ok');
});

router.get('/notes', (req, res) => {
    res.send('Notes desde la base de datos');
});

module.exports = router;