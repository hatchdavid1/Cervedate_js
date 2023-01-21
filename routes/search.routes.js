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


router.get('/:id/comment',(req, res) => {
    
    Search.findById(req.params.id)
    .then(lugares=>{
        res.render('search/comment', {site:lugares})
    })
    .catch(error =>next(error))
    
});

router.post('/info', (req, res, next)=>{
    
    Search.create(req.body)
    .then((lugarCreado)=>{
        res.redirect(`/search/${lugarCreado._id}/comment`)
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

router.post('/:id/comment',(req, res) => {
    
    Search.findByIdAndUpdate(req.params.id, {$push:{comentario:req.body.comentario}})
    .then(lugares=>{
        res.redirect(`/search/${req.params.id}/comment`)
    })
    .catch(error =>next(error))
    
});

  module.exports = router;