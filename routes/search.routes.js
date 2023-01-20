const express = require("express");
const router = express.Router();

const Search = require('../models/search.model')

router.get('/',(req, res) => {
    Search.find()
    .then(lugares =>{
        res.render("search/info", {lugares}) 
    })
    .catch(error=>next(error))
    
});

router.post('/', (req, res, next)=>{
    
    Search.create(req.body)
    .then((lugarCreado)=>{
        res.redirect('/search/comment')
    })
    .catch(next => next(error))
})

router.get('/:id/detail', (req, res, next)=>{
    Search.findById(req.params.id)
    .then(lugares=>{
        res.render('search/comment', {lugares})
    })
    .catch(error =>next(error))
})

  module.exports = router;