const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('home/home')
});

router.get('/wedding', (req,res) => {
    res.render('articles/wedding')
});

router.get('/gallery', (req,res) => {
    res.render('home/gallery')
});

router.get('/birthday', (req,res) => {
    res.render('articles/birthday')
});

router.get('/newspaper', (req,res) => {
    res.render('articles/newspaper')
});

router.get('/marketing', (req,res) => {
    res.render('articles/thshirt')
});

router.get('/nightphotos', (req,res) => {
    res.render('articles/nightphotos')
});

router.get('/about', (req,res) => {
    res.render('home/aboutme')
});

router.get('/portrait', (req,res) => {
    res.render('articles/portrait')
});

router.get('/blackandwhite', (req,res) => {
    res.render('articles/blackandwhite')
});

router.get('/prom', (req,res) => {
    res.render('articles/prom')
});

router.get('/flower', (req,res) => {
    res.render('articles/flower')
});

module.exports = router;