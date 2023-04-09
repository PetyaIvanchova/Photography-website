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

router.get('/newspaper', (req,res) => {
    res.render('bgarticles/newspaper',{layout: 'layoutsB.hbs'})
});

router.get('/marketing', (req,res) => {
    res.render('bgarticles/thshirt',{layout: 'layoutsB.hbs'})
});

router.get('/nightphotos', (req,res) => {
    res.render('bgarticles/nightphotos',{layout: 'layoutsB.hbs'})
});

router.get('/about', (req,res) => {
    res.render('bghome/aboutme',{layout: 'layoutsB.hbs'})
});

router.get('/portrait', (req,res) => {
    res.render('bgarticles/portrait',{layout: 'layoutsB.hbs'})
});

router.get('/blackandwhite', (req,res) => {
    res.render('bgarticles/blackandwhite',{layout: 'layoutsB.hbs'})
});

router.get('/prom', (req,res) => {
    res.render('bgarticles/prom',{layout: 'layoutsB.hbs'})
});

router.get('/flower', (req,res) => {
    res.render('bgarticles/flower',{layout: 'layoutsB.hbs'})
});


module.exports = router;