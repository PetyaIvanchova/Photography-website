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

router.get('/kids', (req,res) => {
    res.render('articles/christmas')
});

router.get('/christmasphoto', (req,res) => {
    res.render('articles/vilichristmas')
});

router.get('/marketing', (req,res) => {
    res.render('articles/thshirt')
});

router.get('/euphoria', (req,res) => {
    res.render('articles/euphoria')
});

router.get('/nightphotos', (req,res) => {
    res.render('articles/nightphotos')
});

router.get('/about', (req,res) => {
    res.render('home/aboutme')
});

router.get('/portrait', (req,res) => {
    res.render('articles/irina')
});

router.get('/blackandwhite', (req,res) => {
    res.render('articles/blackandwhite')
});

module.exports = router;