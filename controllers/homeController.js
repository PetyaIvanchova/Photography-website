const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('bghome/home', {layout: 'layoutsB.hbs'});
});

module.exports = router;