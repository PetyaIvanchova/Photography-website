const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('bghome/home', {layout: 'layoutsB.hbs'})
});

router.get('/wedding', (req,res) => {
    res.render('bgarticles/wedding',{layout: 'layoutsB.hbs'})
});

router.get('/gallery', (req,res) => {
    res.render('bghome/gallery',{layout: 'layoutsB.hbs'})
});

router.get('/birthday', (req,res) => {
    res.render('bgarticles/birthday',{layout: 'layoutsB.hbs'})
});

router.get('/kids', (req,res) => {
    res.render('bgarticles/christmas',{layout: 'layoutsB.hbs'})
});

router.get('/christmasphoto', (req,res) => {
    res.render('bgarticles/vilichristmas',{layout: 'layoutsB.hbs'})
});

router.get('/marketing', (req,res) => {
    res.render('bgarticles/thshirt',{layout: 'layoutsB.hbs'})
});

router.get('/euphoria', (req,res) => {
    res.render('bgarticles/euphoria',{layout: 'layoutsB.hbs'})
});

router.get('/nightphotos', (req,res) => {
    res.render('bgarticles/nightphotos',{layout: 'layoutsB.hbs'})
});

router.get('/about', (req,res) => {
    res.render('bghome/aboutme',{layout: 'layoutsB.hbs'})
});

router.get('/portrait', (req,res) => {
    res.render('bgarticles/irina',{layout: 'layoutsB.hbs'})
});

router.get('/blackandwhite', (req,res) => {
    res.render('bgarticles/blackandwhite',{layout: 'layoutsB.hbs'})
});

module.exports = router;